import { MongoClient } from "mongodb";
import check from "../../check";
import crypt from "../../crypt";
import data from "../../data";

const addUser = async (dbName: string, collName: string, user: any) => {
  const error: Array<any> = [];

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
    let result = await coll.insertOne({...user, createdAt: new Date()});
    if(result.acknowledged === true){
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
};

export default addUser;