"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
// src/domain/value-objects/password.vo.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
class Password {
    value;
    constructor(value) {
        this.value = value;
    }
    static async create(rawPassword) {
        const hashed = await bcrypt_1.default.hash(rawPassword, 10);
        return new Password(hashed);
    }
    static fromHash(hash) {
        return new Password(hash);
    }
    getValue() {
        return this.value;
    }
    async compare(rawPassword) {
        return bcrypt_1.default.compare(rawPassword, this.value);
    }
}
exports.Password = Password;
