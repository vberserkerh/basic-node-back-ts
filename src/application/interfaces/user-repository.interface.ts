// src/application/interfaces/user-repository.interface.ts
import { User } from "../../domain/entities/user.entity";

export interface UserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
}