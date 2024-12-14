// src/application/interfaces/user-repository.interface.ts
import { User } from "../../domain/entities/user.entity";

export interface UserRepository {
  create(user: User): Promise<{ status: number | undefined, message?: string | undefined, user?: User | undefined}>;
  update(id: string, updatedData: any): Promise<{ status: number | undefined, message?: string | undefined, user?: User | undefined}>;
  findAll(): Promise<User[]>;
}