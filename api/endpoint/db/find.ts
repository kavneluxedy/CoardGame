import { Document, Filter, MongoClient, WithId } from "mongodb";
import data from "../../data";

const find = async (dbName: string, collName: string, query: Filter<Document>) => {
    let error = [];
    let allCards: WithId<Document>[] = [];

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
}

export default find