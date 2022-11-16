"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypt = {
    hash: (str) => {
        let salt = bcryptjs_1.default.genSaltSync(12);
        let hash = bcryptjs_1.default.hashSync(str, salt);
        return hash;
    },
    compare: (str, hash) => {
        return bcryptjs_1.default.compareSync(str, hash);
    }
};
exports.default = crypt;
