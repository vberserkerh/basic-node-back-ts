// src/infrastructure/repositories/prisma-user.repository.ts
import { UserRepository } from "../../application/interfaces/user-repository.interface";
import { User } from "../../domain/entities/user.entity";
import { prisma } from "../database/prisma-client";

export class PrismaUserRepository implements UserRepository {

  // Método para criar um usuário
  async create(user: User): Promise<{ status: number, message?: string, user?: User }> {
    try {
      // Verificar se o email ou username já estão em uso
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email: user.email },
            { username: user.username }
          ]
        }
      });

      if (existingUser) {
        // Caso o email já esteja em uso
        if (existingUser.email === user.email) {
          return { status: 400, message: 'Email já cadastrado' };
        }
        // Caso o username já esteja em uso
        if (existingUser.username === user.username) {
          return { status: 400, message: 'Username já em uso' };
        }
      }

      const createdUser = await prisma.user.create({
        data: {
          id: user.id as string,
          email: user.email,
          username: user.username,
          name: user.name,
          password: user.password,  // Atenção: você pode querer hash a senha antes de salvar
          levelId: user.levelId,
        },
      });

      return {
        status: 201,
        user: new User(
          createdUser.id,
          createdUser.email,
          createdUser.username,
          createdUser.name,
          createdUser.password,
          createdUser.levelId
        )
      };

    } catch (error) {
      return { status: 500, message: 'Erro interno do servidor' };
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      return users.map(
        (user: { id: string | null; email: string; username: string; name: string; password: string; levelId: string; }) =>
          new User(user.id, user.email, user.username, user.name, user.password, user.levelId)
      );
    } catch (error) {
      throw new Error('Erro ao buscar os usuários');
    }
  }

  async update(id: string, updatedData: any): Promise<{ status: number | undefined, message?: string | undefined, user?: User | undefined}> {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    return {
    status: 201,
    user: new User(
      updatedUser.id,
      updatedUser.email,
      updatedUser.username,
      updatedUser.name,
      updatedUser.password,
      updatedUser.levelId
    )};
  }

}