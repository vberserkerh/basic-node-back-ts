// src/domain/entities/user.entity.ts
export class User {
  constructor(
    public id: string | null,
    public email: string,
    public username: string,
    public name: string,
    public password: string,
    public levelId: string, 
    public phone?: string | null,
    public taxId?: string | null,
    public address?: string | null
  ) {}
}
  