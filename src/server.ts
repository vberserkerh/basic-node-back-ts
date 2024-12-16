import dotenv from "dotenv";
import userRoutes from "./infrastructure/web/routes/user.routes";

dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir o frontend acessar
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Habilita envio de cookies e headers como Authorization
}));

app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});