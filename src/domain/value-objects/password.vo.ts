// src/domain/value-objects/password.vo.ts
import bcrypt from "bcrypt";

export class Password {
  private constructor(private readonly value: string) {}

  static async create(rawPassword: string): Promise<Password> {
    const hashed = await bcrypt.hash(rawPassword, 10);
    return new Password(hashed);
  }

  static fromHash(hash: string): Password {
    return new Password(hash);
  }

  getValue(): string {
    return this.value;
  }

  async compare(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.value);
  }
}