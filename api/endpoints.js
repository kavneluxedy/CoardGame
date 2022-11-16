const { MongoClient } = require("mongodb");
const check = require("./check.js");
const crypt = require("./crypt.js");
const data = require("./data.js");

module.exports = {
	addUser: async (dbName, collName, user) => {
		let error = [];

		if (check.isValidUser(user) === false) {
			error.push({
				errorFlag: "Format",
				errorMessage: "Erreur de format, vérifiez les champs",
				result: "User Format (Id, pwd, ...) is not valid",
			});
		}

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		user.password = crypt.hash(user.password);
		try {
			let isAlreadyExists = await coll.findOne({ nickname: user.nickname });
			if (isAlreadyExists !== null) {
				let isUserExists = await coll.findOne({ nickname: user.nickname });
				if (isUserExists !== null) {
					error.push({
						errorFlag: "Name",
						errorMessage: "Nickname already in use",
						result: "Pseudo déjà utilisé",
					});
				}
			}
		} catch (err) {
			console.error(err);
		}
		finally {

		}

		// !!! UN SEUL TRY/CATCH SERAIT BON ???

		try {
			if (!!error.length) {
				return {
					error: true,
					result: error,
				};
			}
			let result = await coll.insertOne(user);
			if (result.acknowledged === true) {
				const response = {
					error: false,
					result: await coll.findOne({ _id: result.insertedId })
				};
				console.log("NEW USER ==> ");
				console.table(user);
				return response;
			} else {
				error.push({
					errorFlag: "Error",
					errorMessage: "Insertion failed try again",
					result: "Mongo Failed",
				});
			}


		} finally {
			await client.close();
		}
	},

	tokenAuth: async (dbName, collName, user) => {
		let error = [];

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		try {
			let isUserExists = await coll.findOne({ nickname: user.nickname });

			if (isUserExists !== null) {
				let dbUser = isUserExists;
				if (user.token !== dbUser.token) {
					error.push({
						errorFlag: "Name",
						errorMessage: "Id/mdp incorrecte",
						result: "incorrect Id/pwd",
					});

					return {
						error: true,
						result: error
					}

				} else {

					console.log(
						`\n↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n` +
						new Date().toLocaleString() +
						"\n" +
						user.nickname +
						" is now online and had forget to disconnect\n" +
						`↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
					);
					return {
						error: false,
						result: dbUser,
					};
				}

			} else if (isUserExists === null || !isUserExists) {

				error.push({
					errorFlag: "Name",
					errorMessage: "User Not Found",
					result: "User not found",
				});

				return {
					error: true,
					result: error
				}
			}

		} finally {
			await client.close();
		}
	},

	auth: async (dbName, collName, user) => {
		let error = [];
		let dbUser = {};

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		try {
			let isUserExists = await coll.findOne({ nickname: user.nickname });

			// ? If user exists in Database
			if (isUserExists !== null) {
				dbUser = isUserExists;

				// ? Check if password is correct

				if (!crypt.compare(user.password, dbUser.password)) {
					// !!!!!!!!!!!!!!!!!!!!!!!
					// ! If password is wrong
					// !!!!!!!!!!!!!!!!!!!!!!!
					console.error("Pwd don't match");
					error.push({
						errorFlag: "Name",
						errorMessage: "Id/mdp incorrecte",
						result: "incorrect Id/pwd",
					});

					return {
						error: true,
						result: error
					}
				} else {
					// *************************
					// * If password is correct
					// *************************
					console.log(
						`\n↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n` +
						new Date().toLocaleString() +
						"\n" +
						user.nickname +
						" is now online\n" +
						`↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
					);
					return {
						error: false,
						result: dbUser,
					};
				}

			} else if (isUserExists === null || !isUserExists) {
				// ? ////////////////////////////////////////////////////
				// ? Manage error if desired user nickname doesn't exist
				// ? ////////////////////////////////////////////////////
				error.push({
					errorFlag: "Name",
					errorMessage: "User Not Found",
					result: "User not found",
				});
				return {
					error: true,
					result: error
				}
			}

		} finally {
			await client.close();
		}
	},

	create: async (dbName, collName, wantedCard) => {
		let error = [];

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		try {
			let isCardExists = await coll.findOne({ name: wantedCard.name });

			if (isCardExists !== null) {
				console.error("\n\n=========================> Cette carte existe déjà <=========================");
				console.warn("CARTE EXISTANTE ==> " + wantedCard.name);
				console.table([isCardExists]);
				console.error("=============================================================================\n\n");
				error.push({
					errorFlag: "card",
					errorMessage: "Card already existing",
					result: "Carte déjà existante",
				})
				const response = {
					error: true,
					result: error
				}
				return response;

			} else {
				console.log("Cette carte n'existe pas encore, \ncréation en cours ... \n");

				const response = {
					error: false,
					result: await coll.insertOne(wantedCard)
				}

				return response;
			}
		} catch (err) {
			error.push({
				errorFlag: "cards",
				errorMessage: "Error during card creation",
				result: err
			})
			return {
				error: true,
				result: error
			}
		}
		finally {
			await client.close();
		}
	},

	find: async (dbName, collName, query) => {
		let error = [];
		let allCards = [];

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		try {
			let cursor = await coll.find(query);

			if (cursor !== null) {
				await cursor.forEach(element => {
					allCards.push(element);
				});

				if (!allCards.length) { // ? if collection doesn't contain document(s)
					error.push({
						errorFlag: "cards",
						errorMessage: "There are no cards",
						result: "There are no cards in the collection"
					})
					return {
						error: true,
						result: error
					}
				} else if (!(!allCards.length)) { // ? if collection contains document(s)
					return {
						error: false,
						result: allCards
					}
				}
				else {
					console.error("L'avenir, c'est la vie !")
				}

			}

		} catch (err) {
			error.push({
				errorFlag: "card",
				errorMessage: "Card already existing",
				result: err,
			})
			return {
				error: true,
				result: error
			};
		} finally {
			await client.close();
		}
	},

	update: async (dbName, collName, query) => {
		let error = [];

		const uri = data.uri;
		const client = new MongoClient(uri);
		const database = client.db(dbName);
		const coll = database.collection(collName);

		try {
			let isCardExists = coll.findAndModify(query)

				(isCardExists !== null)
				? console.log("ID TO MODIFY =")
				: console.log("false")

		} catch (error) {

		}
	},

	remove: async (dbName, collName, card_id) => {
		let error = [];

		const uri = data.uri;
		const client = new MongoClient(uri);
		const db = client.db(dbName);
		const coll = db.collection(collName);

		try {
			let isCardExists = await coll.deleteOne(card_id);

			if (isCardExists !== null) {

				console.log(isCardExists);

				return {
					error: false,
					result: isCardExists
				}

			} else {
				console.log("Error during deletion");
			}

		} catch (error) {
			console.error(error)
		}
	}
};