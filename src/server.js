"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./infrastructure/web/routes/user.routes"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Configuração do CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Permitir o frontend acessar
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Habilita envio de cookies e headers como Authorization
}));
app.use(express_1.default.json());
app.use("/api", user_routes_1.default);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
