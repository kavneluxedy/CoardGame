import { MongoClient } from "mongodb";
import data from "../../data";

const tokenAuth = async(dbName: string, collName: string, user: any) => {
  let error: Array<any> = [];

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
};

export default tokenAuth