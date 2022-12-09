import { Filter, MongoClient, UpdateFilter } from "mongodb";
import data from "../../data";
import { ObjectId } from "mongodb";
import { ICard } from "../../types/ICard";

const update = async (dbName: string, collName: string, card: any) => {
    let error: {
        errorFlag: string;
        errorMessage: unknown;
        errorResult: any;
    }[] = [];

    const uri = data.uri;
    const client = new MongoClient(uri);
    const database = client.db(dbName);
    const cards = database.collection<ICard>(collName);

    try {
        const filter: Filter<ICard> = {
            _id: new ObjectId(card._id),
        };
        console.log(filter);

        const update: UpdateFilter<ICard> | Partial<ICard> = {
            $set: {
                name: String(card.name),
                cost: Number(card.cost),
                atk: Number(card.atk),
                def: Number(card.def),
                hp: Number(card.hp),
                mp: Number(card.mp),
                effects: String(card.effects).split('//'),
                range: Number(card.range),
            },
        };

        let isCardExists = await cards.updateOne(filter, update);

        console.log(isCardExists);
        if (isCardExists !== null) {
            if (isCardExists.acknowledged !== false) {

                if (isCardExists.matchedCount === 0) {
                    error.push({
                        errorFlag: "card",
                        errorMessage: "Aucun résultat matché, vérifiez le filtre",
                        errorResult: "Aucun résultat matché, vérifiez le filtre",
                    });
                    console.error("Aucun résultat matché, vérifiez le filtre");
                    return {
                        error: true,
                        result: error,
                    };

                } else {
                    console.log("1 ou plusieurs matchs trouvés !! Mise à jour en cours ...");

                    return {
                        error: false,
                        result: isCardExists,
                    };
                }
            } else {
                //TODO
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

export default update;
