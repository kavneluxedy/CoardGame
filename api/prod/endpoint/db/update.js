"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const data_1 = __importDefault(require("../../data"));
const mongodb_2 = require("mongodb");
const update = (dbName, collName, card) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const cards = database.collection(collName);
    try {
        const filter = {
            _id: new mongodb_2.ObjectId(card._id),
        };
        console.log(filter);
        const update = {
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
        let isCardExists = yield cards.updateOne(filter, update);
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
                }
                else {
                    console.log("1 ou plusieurs matchs trouvés !! Mise à jour en cours ...");
                    return {
                        error: false,
                        result: isCardExists,
                    };
                }
            }
            else {
            }
        }
        else {
            console.log("Card doesn't exist");
            error.push({
                errorFlag: "card",
                errorMessage: "Card doesn't exist",
                errorResult: "Card doesn't exist"
            });
            return {
                error: true,
                result: error
            };
        }
    }
    catch (err) {
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
    }
    finally {
        yield client.close();
    }
});
exports.default = update;
