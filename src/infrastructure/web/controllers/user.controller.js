"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_usecase_1 = require("../../../application/use-cases/create-user.usecase");
const get_users_usecase_1 = require("../../../application/use-cases/get-users.usecase");
const prisma_user_repository_1 = require("../../repositories/prisma-user.repository");
const userRepository = new prisma_user_repository_1.PrismaUserRepository();
class UserController {
    static async createUser(req, res) {
        const useCase = new create_user_usecase_1.CreateUserUseCase(userRepository);
        const user = await useCase.execute(req.body);
        res.status(201).json(user);
    }
    static async getUsers(req, res) {
        const useCase = new get_users_usecase_1.GetUsersUseCase(userRepository);
        const users = await useCase.execute();
        res.status(200).json(users);
    }
}
exports.UserController = UserController;
