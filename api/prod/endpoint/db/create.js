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
const toSave_1 = require("../other/toSave");
const createCard = (dbName, collName, wantedCard) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
        let isCardExists = yield coll.findOne({ name: wantedCard.name });
        if (isCardExists !== null) {
            console.error("\n\n=========================> Cette carte existe déjà <=========================");
            console.warn("CARTE EXISTANTE ==> " + wantedCard.name);
            console.table([isCardExists]);
            console.error("=============================================================================\n\n");
            error.push({
                errorFlag: "card",
                errorMessage: "Card already existing",
                result: "Carte déjà existante",
            });
            const response = {
                error: true,
                result: error
            };
            return response;
        }
        else {
            console.log("Cette carte n'existe pas encore, \ncréation en cours ... \n");
            let card = {
                name: wantedCard.name,
                cost: wantedCard.cost,
                atk: wantedCard.atk,
                def: wantedCard.def,
                hp: wantedCard.hp,
                mp: wantedCard.mp,
                effects: wantedCard.effects,
                range: wantedCard.range,
                handImg: yield (0, toSave_1.toSave)(wantedCard.handImg, "hand", wantedCard.name),
                boardImg: yield (0, toSave_1.toSave)(wantedCard.boardImg, "board", wantedCard.name),
            };
            const response = {
                error: false,
                result: yield coll.insertOne(card),
            };
            console.log("Carte créée");
            console.table([card]);
            console.log("\n\n");
            return response;
        }
    }
    catch (err) {
        error.push({
            error: true,
            result: err
        });
        console.error(err);
    }
    finally {
        yield client.close();
    }
});
exports.default = createCard;
