// src/application/use-cases/create-user.usecase.ts
import { User } from "../../domain/entities/user.entity";
import { Password } from "../../domain/value-objects/password.vo";
import { UserRepository } from "../interfaces/user-repository.interface";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: Omit<User, "id" | "password"> & { password: string }): Promise<User> {
    const password = await Password.create(data.password);
    const user = new User(null, data.email, data.username, data.name, password.getValue(), data.levelId);
    return this.userRepository.create(user);
  }
}
