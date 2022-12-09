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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const endpoints_1 = __importDefault(require("./endpoint/endpoints"));
const { addUser, auth, create, find, update, remove, tokenAuth } = Object.assign({}, endpoints_1.default);
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use("/", express_1.default.static("public"));
app.use(body_parser_1.default.json({ limit: "16mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "16mb", extended: true, parameterLimit: 100000 }));
app.post("/api/addUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield addUser(param.dbName, param.collName, param.query.user);
    res.send(result);
}));
app.post("/api/auth", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield auth(param.dbName, param.collName, param.query.user);
    res.send(result);
}));
app.post("/api/tokenAuth", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield tokenAuth(param.dbName, param.collName, param.query.user);
    res.send(result);
}));
app.post("/api/cards/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield create(param.dbName, param.collName, param.query.card);
    res.send(result);
}));
app.post("/api/cards/find", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield find(param.dbName, param.collName, param.query);
    res.send(result);
}));
app.post("/api/cards/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield update(param.dbName, param.collName, param.query.card);
    res.send(result);
}));
app.post("/api/cards/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param = req.body;
    let result = yield remove(param.dbName, param.collName, param.query);
    res.send(result);
}));
app.listen(port, () => console.log(` ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n|                      |\n|Listening on port ${port}|\n|                      |\n ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`));
