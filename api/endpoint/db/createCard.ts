import { MongoClient } from "mongodb";
import data from "../../data";

const createCard = async (dbName: string, collName: string, wantedCard: any) => {
  let error: Array<any> = [];

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

      // for (let i = 0; i < 3; i++) { setTimeout(() => { console.log(" ... ") }, 1000) };

      const response = {
        error: false,
        result: await coll.insertOne(wantedCard)
      }

      console.log("Carte créée: ");
      console.table([wantedCard]);
      console.log("\n");

      return response;
    }
  } catch (err) {
    error.push({
      error: true,
      result: err
    })
    console.error(err); // FONCTIONNE TRES BIEN ET NE FAIS PAS SAUTER LE PROCESSUS
  }
  finally {
    await client.close();
  }
};

export default createCard;