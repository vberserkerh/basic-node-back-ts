// src/infrastructure/repositories/prisma-user.repository.ts
import { UserRepository } from "../../application/interfaces/user-repository.interface";
import { User } from "../../domain/entities/user.entity";
import { prisma } from "../database/prisma-client";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        username: user.username,
        name: user.name,
        password: user.password,
        levelId: user.levelId,
      },
    });
    return new User(
      createdUser.id,
      createdUser.email,
      createdUser.username,
      createdUser.name,
      createdUser.password,
      createdUser.levelId
    );
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map(
      (user) =>
        new User(user.id, user.email, user.username, user.name, user.password, user.levelId)
    );
  }
}