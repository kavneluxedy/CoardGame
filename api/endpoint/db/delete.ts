import { Filter, MongoClient } from "mongodb";
import data from "../../data";
import { ObjectId } from "mongodb";

const remove = async (dbName: string, collName: string, query: any) => {
    let error: {
        errorFlag: string;
        errorMessage: unknown;
        errorResult: any;
    }[] = [];

    interface ICard {
        _id: ObjectId;
        name: string;
        cost: number;
        atk: number;
        def: number;
        hp: number;
        mp: number;
        effects: Array<string>;
    }

    const uri = data.uri;
    const client = new MongoClient(uri);
    const database = client.db(dbName);
    const cards = database.collection<ICard>(collName);

    try {
        const filter: Filter<ICard> = {
            _id: new ObjectId(query._id),
        };
        console.log(filter, "L32");

        let isCardExists = await cards.deleteOne(filter);

        console.log(isCardExists);
        if (isCardExists !== null) {
            if (isCardExists.acknowledged !== false) {

            } else {
                console.log(
                    "1 ou plusieurs matchs trouvés !! Mise à jour en cours ..."
                );
                return {
                    error: false,
                    result: isCardExists,
                };
            }
        }
        else {
            console.log("Card doesn't exist");
            error.push({
                errorFlag: "card",
                errorMessage: "Card doesn't exist",
                errorResult: "Card doesn't exist"
            })

            return {
                error: true,
                result: error
            }
        }
    } catch (err) {
        console.error(err);
        error.push({
            errorFlag: "card",
            errorMessage: err,
            errorResult: err,
        });

        return {
            error: true,
            result: error,
        };
    } finally {
        await client.close();
    }
};

export default remove
