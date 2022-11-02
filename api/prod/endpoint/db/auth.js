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
const crypt_1 = __importDefault(require("../../crypt"));
const data_1 = __importDefault(require("../../data"));
const auth = (dbName, collName, user) => __awaiter(void 0, void 0, void 0, function* () {
    let error = [];
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
        let isUserExists = yield coll.findOne({ nickname: user.nickname });
        // ? If user exists in Database
        if (isUserExists !== null) {
            let dbUser = isUserExists;
            // ? Check if password is correct
            // !!!!!!!!!!!!!!!!!!!!!!!
            // ! If password is wrong
            // !!!!!!!!!!!!!!!!!!!!!!!
            // !!!!!!!!!!!!!!!!!!!!!!!
            if (!crypt_1.default.compare(user.password, dbUser.password)) {
                console.error("Pwd don't match");
                error.push({
                    errorFlag: "Name",
                    errorMessage: "Id/mdp incorrecte",
                    result: "incorrect Id/pwd",
                });
                return {
                    error: true,
                    result: error
                };
                // !!!!!!!!!!!!!!!!!!!!!!!
                // !!!!!!!!!!!!!!!!!!!!!!!
                // !!!!!!!!!!!!!!!!!!!!!!!
            }
            else {
                // *************************
                // * If password is correct
                // *************************
                // *************************
                console.log(`\n↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n` +
                    new Date().toLocaleString() +
                    "\n" +
                    user.nickname +
                    " is now online\n" +
                    `↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`);
                return {
                    error: false,
                    result: dbUser,
                };
                // *************************
                // *************************
                // *************************
            }
        }
        else if (isUserExists === null || !isUserExists) {
            // ? ////////////////////////////////////////////////////
            // ? Manage error if desired user nickname doesn't exist
            // ? ////////////////////////////////////////////////////
            // ? ////////////////////////////////////////////////////
            error.push({
                errorFlag: "Name",
                errorMessage: "User Not Found",
                result: "User not found",
            });
            return {
                error: true,
                result: error
            };
            // ? ////////////////////////////////////////////////////
            // ? ////////////////////////////////////////////////////
            // ? ////////////////////////////////////////////////////
        }
    }
    finally {
        yield client.close();
    }
});
exports.default = auth;
