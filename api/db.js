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
			isAlreadyExists = await coll.findOne({ nickname: user.nickname });
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

			// error.splice(0, error.length); // Clear error array

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
			if (isUserExists === null) {
				// ? ////////////////////////////////////////////////////
				// ? Manage error if desired user nickname doesn't exist
				// ? ////////////////////////////////////////////////////
				error.push({
					errorFlag: "User Not Found",
					errorMessage: "User Not Found",
					result: "User not found",
				});
				// ? ////////////////////////////////////////////////////
			} else {
				// * User exists
				dbUser = isUserExists;
				// ? Check if password is correct
				if (!crypt.compare(user.password, dbUser.password)) {
					// !!!!!!!!!!!!!!!!!!!!!!!
					// ! If password is wrong
					// !!!!!!!!!!!!!!!!!!!!!!!

					error.push({
						errorFlag: "Pwd",
						errorMessage: "Id/mdp incorrecte",
						result: "incorrect Id/pwd",
					});

				} else {
					// *************************
					// * If password is correct
					// *************************
					console.log(
						`\n↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n` +
						new Date().toUTCString() +
						"\n" +
						user.nickname +
						" is now online\n" +
						`↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
					);
					// *************************
				}

				if (!!error.length) {
					return {
						error: true,
						result: error,
					};
				}
				return {
					error: false,
					result: dbUser,
				};
			}
		} finally {
			await client.close();
		}
	},
};
