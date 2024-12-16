"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/domain/entities/user.entity.ts
class User {
    id;
    email;
    username;
    name;
    password;
    levelId;
    phone;
    taxId;
    address;
    constructor(id, email, username, name, password, levelId, phone, taxId, address) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.name = name;
        this.password = password;
        this.levelId = levelId;
        this.phone = phone;
        this.taxId = taxId;
        this.address = address;
    }
}
exports.User = User;
