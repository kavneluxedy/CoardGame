import { MongoClient } from "mongodb";
import data from "../../data";
import { toSave } from "../other/toSave";

const createCard = async (dbName: string, collName: string, deck: any) => {
    let error: Array<any> = [];
    let card: Object;

    const uri = data.uri;
    const client = new MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);

    try {
        let isDeckExists = await coll.findOne({ deck });

        if (isDeckExists !== null) {
            console.error("\n\n=========================> Cette carte existe déjà <=========================");
            console.warn("DECK EXISTANT ==> " + deck);
            console.table([isDeckExists]);
            console.error("=============================================================================\n\n");
            error.push({
                errorFlag: "deck",
                errorMessage: "Deck already existing",
                result: "Deck déjà existant",
            })
            const response = {
                error: true,
                result: error
            }

            return response;
        } else {
            console.log(deck);
            console.log("Cette carte n'existe pas encore, \ncréation en cours ... \n");

            const response = {
                error: false,
                result: await coll.insertOne(deck),
            }

            console.log("Carte créée");
            console.table([deck]);
            console.log("\n\n");

            return response;
        }
    } catch (err) {
        error.push({
            error: true,
            result: err
        })
        console.error(err);
    }
    finally {
        await client.close();
    }
};

export default createCard;