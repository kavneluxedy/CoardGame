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
const createCard = (dbName, collName, wantedCard) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
        let isCardExists = coll.findOne({ name: wantedCard.name });
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
            const response = {
                error: false,
                result: coll.insertOne(wantedCard)
            };
            console.log("Carte créée: ");
            console.table([wantedCard]);
            console.log("\n");
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
        client.close();
    }
});
exports.default = createCard;
