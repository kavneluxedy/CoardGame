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
const check_1 = __importDefault(require("../../check"));
const crypt_1 = __importDefault(require("../../crypt"));
const data_1 = __importDefault(require("../../data"));
const addUser = (dbName, collName, user) => __awaiter(void 0, void 0, void 0, function* () {
    const error = [];
    if (check_1.default.isValidUser(user) === false) {
        error.push({
            errorFlag: "Format",
            errorMessage: "Erreur de format, vérifiez les champs",
            result: "User Format (Id, pwd, ...) is not valid",
        });
    }
    const uri = data_1.default.uri;
    const client = new mongodb_1.MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    user.password = crypt_1.default.hash(user.password);
    try {
        let isAlreadyExists = yield coll.findOne({ nickname: user.nickname });
        if (isAlreadyExists !== null) {
            let isUserExists = yield coll.findOne({ nickname: user.nickname });
            if (isUserExists !== null) {
                error.push({
                    errorFlag: "Name",
                    errorMessage: "Nickname already in use",
                    result: "Pseudo déjà utilisé",
                });
            }
        }
    }
    catch (err) {
        console.error(err);
    }
    finally {
    }
    // !!! UN SEUL TRY/CATCH SERAIT BON ???
    try {
        if (!!error.length) {
            return {
                error: true,
                result: error,
            };
        }
        let result = yield coll.insertOne(Object.assign(Object.assign({}, user), { createdAt: new Date() }));
        if (result.acknowledged === true) {
            const response = {
                error: false,
                result: yield coll.findOne({ _id: result.insertedId })
            };
            console.log("NEW USER ==> ");
            console.table(user);
            return response;
        }
        else {
            error.push({
                errorFlag: "Error",
                errorMessage: "Insertion failed try again",
                result: "Mongo Failed",
            });
        }
    }
    finally {
        yield client.close();
    }
});
exports.default = addUser;
