import { MongoClient } from "mongodb";
import data from "../../data";
import { toSave } from "../other/toSave";

const createCard = async (dbName: string, collName: string, wantedCard: any) => {
	let error: Array<any> = [];
	let card: Object;

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
			console.log(wantedCard);
			console.log("Cette carte n'existe pas encore, \ncréation en cours ... \n");

			switch (wantedCard.type) {
				case "unit":
					card = {
						name: wantedCard.name,
						cost: wantedCard.cost,
						atk: wantedCard.atk,
						def: wantedCard.def,
						hp: wantedCard.hp,
						mp: wantedCard.mp,
						effects: wantedCard.effects,
						range: wantedCard.range,
						handImg: await toSave(wantedCard.handImgData, "unit/hand", wantedCard.name),
						boardImg: await toSave(wantedCard.boardImgData, "unit/board", wantedCard.name),
						type: wantedCard.type
					}
					break;
				case "land":
					card = {
						name: wantedCard.name,
						cost: wantedCard.cost,
						effects: wantedCard.effects,
						handImg: await toSave(wantedCard.handImgData, "land/hand", wantedCard.name),
						boardImg: await toSave(wantedCard.boardImgData, "land/board", wantedCard.name),
						type: wantedCard.type
					}
					break;
				case "spell":
					card = {
						name: wantedCard.name,
						cost: wantedCard.cost,
						effects: wantedCard.effects,
						handImg: await toSave(wantedCard.handImgData, "spell/hand", wantedCard.name),
						boardImg: await toSave(wantedCard.boardImgData, "spell/board", wantedCard.name),
						type: wantedCard.type
					}
					break;
				case "building":
					card = {
						name: wantedCard.name,
						cost: wantedCard.cost,
						def: wantedCard.def,
						hp: wantedCard.hp,
						effects: wantedCard.effects,
						handImg: await toSave(wantedCard.handImgData, "building/hand", wantedCard.name),
						boardImg: await toSave(wantedCard.boardImgData, "building/board", wantedCard.name),
						type: wantedCard.type
					}
					break;
				case "consumable":
					card = {
						name: wantedCard.name,
						cost: wantedCard.cost,
						effects: wantedCard.effects,
						handImg: await toSave(wantedCard.handImgData, "consumable/hand", wantedCard.name),
						boardImg: await toSave(wantedCard.boardImgData, "consumable/board", wantedCard.name),
						type: wantedCard.type
					}
					break;

				default:
					card = {};
			}

			const response = {
				error: false,
				result: await coll.insertOne(card),
			}

			console.log("Carte créée");
			console.table([card]);
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