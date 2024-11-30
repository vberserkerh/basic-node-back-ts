// src/domain/entities/user.entity.ts
export class User {
    constructor(
      public readonly id: number | null,
      public readonly email: string,
      public readonly username: string,
      public readonly name: string,
      public readonly password: string,
      public readonly levelId: number
    ) {}
  }
  