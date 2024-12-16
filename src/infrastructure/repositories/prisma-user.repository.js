"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const prisma_client_1 = require("../database/prisma-client");
class PrismaUserRepository {
    // Método para criar um usuário
    async create(user) {
        try {
            // Verificar se o email ou username já estão em uso
            const existingUser = await prisma_client_1.prisma.user.findFirst({
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
            const createdUser = await prisma_client_1.prisma.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    name: user.name,
                    password: user.password, // Atenção: você pode querer hash a senha antes de salvar
                    levelId: user.levelId,
                },
            });
            return {
                status: 201,
                user: new user_entity_1.User(createdUser.id, createdUser.email, createdUser.username, createdUser.name, createdUser.password, createdUser.levelId)
            };
        }
        catch (error) {
            return { status: 500, message: 'Erro interno do servidor' };
        }
    }
    async findAll() {
        try {
            const users = await prisma_client_1.prisma.user.findMany();
            return users.map((user) => new user_entity_1.User(user.id, user.email, user.username, user.name, user.password, user.levelId));
        }
        catch (error) {
            throw new Error('Erro ao buscar os usuários');
        }
    }
    async update(id, updatedData) {
        const updatedUser = await prisma_client_1.prisma.user.update({
            where: { id },
            data: updatedData,
        });
        return {
            status: 201,
            user: new user_entity_1.User(updatedUser.id, updatedUser.email, updatedUser.username, updatedUser.name, updatedUser.password, updatedUser.levelId)
        };
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
