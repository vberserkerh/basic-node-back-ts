"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
// src/application/use-cases/create-user.usecase.ts
const user_entity_1 = require("../../domain/entities/user.entity");
const password_vo_1 = require("../../domain/value-objects/password.vo");
const uuid_1 = require("uuid");
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const password = await password_vo_1.Password.create(data.password);
        const userId = (0, uuid_1.v4)();
        const user = new user_entity_1.User(userId, data.email, data.username, data.name, password.getValue(), data.levelId);
        return this.userRepository.create(user);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
