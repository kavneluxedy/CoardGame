import { MongoClient } from "mongodb";
import crypt from "../../crypt";
import data from "../../data";

const auth = async (dbName: string, collName: string, user: any) => {
  let error: Array<any> = [];

  const uri = data.uri;
  const client = new MongoClient(uri);
  const database = client.db(dbName);
  const coll = database.collection(collName);

  try {
    let isUserExists = await coll.findOne({ nickname: user.nickname });

    // ? If user exists in Database
    if (isUserExists !== null) {
      let dbUser = isUserExists;

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
};

export default auth;