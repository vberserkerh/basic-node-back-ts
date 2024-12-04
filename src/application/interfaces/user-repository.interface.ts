// src/application/interfaces/user-repository.interface.ts
import { User } from "../../domain/entities/user.entity";

export interface UserRepository {
  create(user: User): Promise<{ status: number, message?: string, user?: User }>;
  findAll(): Promise<User[]>;
}