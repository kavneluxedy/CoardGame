import { Document, Filter, MongoClient, WithId } from "mongodb";
import data from "../../data";
import { getImageDataUrl } from "../other/toSave";


const find = async (dbName: string, collName: string, query: Filter<Document>) => {
    let error = [];
    let allCards: WithId<Document>[] = [];

    const uri = data.uri;
    const client = new MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);

    try {
        let cursor = await coll.find(query.query).sort(query.options.sort);

        if (cursor !== null) {

            await cursor.forEach((document => {
                allCards.push(document);
            }));

            for (const card of allCards) {
                card.handImg = await getImageDataUrl(card.handImg);
                card.boardImg = await getImageDataUrl(card.boardImg);
            }

            if (allCards.length === 0) { // ? if collection doesn't contain document(s)
                error.push({
                    errorFlag: "cards",
                    errorMessage: "There are no cards",
                    result: allCards

                })
                return {
                    error: true,
                    result: error
                }
            } else {

                if (!(!allCards.length)) { // ? if collection contains document(s)

                    return {
                        error: false,
                        result: allCards
                    }
                }
                else {
                    console.error("L'avenir, c'est la vie !")
                }
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