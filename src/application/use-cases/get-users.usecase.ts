// src/application/use-cases/get-users.usecase.ts
import { UserRepository } from "../interfaces/user-repository.interface";
import { User } from "../../domain/entities/user.entity";

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}