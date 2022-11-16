"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addUser_1 = __importDefault(require("./db/addUser"));
const auth_1 = __importDefault(require("./db/auth"));
const tokenAuth_1 = __importDefault(require("./db/tokenAuth"));
const create_1 = __importDefault(require("./db/create"));
const find_1 = __importDefault(require("./db/find"));
const update_1 = __importDefault(require("./db/update"));
const delete_1 = __importDefault(require("./db/delete"));
const endpoints = {
    addUser: addUser_1.default,
    auth: auth_1.default,
    tokenAuth: tokenAuth_1.default,
    create: create_1.default,
    find: find_1.default,
    update: update_1.default,
    remove: delete_1.default,
};
exports.default = endpoints;
