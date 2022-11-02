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
const find = (dbName, collName, query) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    let allCards = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
        let cursor = yield coll.find(query);
        if (cursor !== null) {
            yield cursor.forEach(element => {
                allCards.push(element);
            });
            if (!allCards.length) { // ? if collection doesn't contain document(s)
                error.push({
                    errorFlag: "cards",
                    errorMessage: "There are no cards",
                    result: "There are no cards in the collection"
                });
                return {
                    error: true,
                    result: error
                };
            }
            else if (!(!allCards.length)) { // ? if collection contains document(s)
                return {
                    error: false,
                    result: allCards
                };
            }
            else {
                console.error("L'avenir, c'est la vie !");
            }
        }
    }
    catch (err) {
        error.push({
            errorFlag: "card",
            errorMessage: "Card already existing",
            result: err,
        });
        return {
            error: true,
            result: error
        };
    }
    finally {
        yield client.close();
    }
});
exports.default = find;
