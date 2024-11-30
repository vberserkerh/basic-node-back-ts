// src/infrastructure/web/controllers/user.controller.ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/use-cases/create-user.usecase";
import { GetUsersUseCase } from "../../../application/use-cases/get-users.usecase";
import { PrismaUserRepository } from "../../repositories/prisma-user.repository";

const userRepository = new PrismaUserRepository();

export class UserController {
  static async createUser(req: Request, res: Response) {
    const useCase = new CreateUserUseCase(userRepository);
    const user = await useCase.execute(req.body);
    res.status(201).json(user);
  }

  static async getUsers(req: Request, res: Response) {
    const useCase = new GetUsersUseCase(userRepository);
    const users = await useCase.execute();
    res.status(200).json(users);
  }
}
