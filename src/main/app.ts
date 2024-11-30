import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Exemplo de rota
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
  console.log('teste')
});

export default app;