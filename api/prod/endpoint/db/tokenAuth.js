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
const tokenAuth = (dbName, collName, user) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
        let isUserExists = yield coll.findOne({ nickname: user.nickname });
        if (isUserExists !== null) {
            let dbUser = isUserExists;
            if (user.token !== dbUser.token) {
                error.push({
                    errorFlag: "Name",
                    errorMessage: "Id/mdp incorrecte",
                    result: "incorrect Id/pwd",
                });
                return {
                    error: true,
                    result: error
                };
            }
            else {
                console.log(`\n↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n` +
                    new Date().toLocaleString() +
                    "\n" +
                    user.nickname +
                    " is now online and had forget to disconnect\n" +
                    `↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`);
                return {
                    error: false,
                    result: dbUser,
                };
            }
        }
        else if (isUserExists === null || !isUserExists) {
            error.push({
                errorFlag: "Name",
                errorMessage: "User Not Found",
                result: "User not found",
            });
            return {
                error: true,
                result: error
            };
        }
    }
    finally {
        yield client.close();
    }
});
exports.default = tokenAuth;
