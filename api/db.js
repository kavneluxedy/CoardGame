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
				error.push({
					errorFlag: "Name",
					errorMessage: "Pseudo déjà utilisé",
					result: "Nickname is already taken",
				});
			}
		} finally {
		}

		try {
			if (!!error.length) {
				return {
					error: true,
					result: error,
				};
			}

			const response = {
				error: false,
				result: await coll.insertOne(user),
			};
			console.log("NEW USER ==> ");
			console.table(user);
			return response;
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

				// !!!!!!!!!!!!!!!!!!!!!!!
				// ! If password is wrong
				// !!!!!!!!!!!!!!!!!!!!!!!
				// !!!!!!!!!!!!!!!!!!!!!!!

				if (!crypt.compare(user.password, dbUser.password)) {
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

					// !!!!!!!!!!!!!!!!!!!!!!!
					// !!!!!!!!!!!!!!!!!!!!!!!
					// !!!!!!!!!!!!!!!!!!!!!!!

				} else {

					// *************************
					// * If password is correct
					// *************************
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

					// *************************
					// *************************
					// *************************
				}

			} else if (isUserExists === null || !isUserExists) {


				// ? ////////////////////////////////////////////////////
				// ? Manage error if desired user nickname doesn't exist
				// ? ////////////////////////////////////////////////////
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

				// ? ////////////////////////////////////////////////////
				// ? ////////////////////////////////////////////////////
				// ? ////////////////////////////////////////////////////
			}

		} finally {
			await client.close();
		}
	},
};
