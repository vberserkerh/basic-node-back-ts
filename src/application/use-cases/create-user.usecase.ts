// src/application/use-cases/create-user.usecase.ts
import { User } from "../../domain/entities/user.entity";
import { Password } from "../../domain/value-objects/password.vo";
import { UserRepository } from "../interfaces/user-repository.interface";
import { v4 as uuidv4 } from "uuid";

type CreateUserDTO = {
  id: string,
  email: string;
  username: string;
  name: string;
  password: string;
  levelId: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  
  async execute(data: CreateUserDTO): Promise<{ status: number | undefined, message?: string | undefined, user?: User | undefined}> {
    const password = await Password.create(data.password);
    const userId = uuidv4();
    const user = new User(userId, data.email, data.username, data.name, password.getValue(), data.levelId);
    return this.userRepository.create(user);
  }
}