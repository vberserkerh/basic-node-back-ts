"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/web/routes/user.routes.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post("/users", user_controller_1.UserController.createUser);
router.get("/users", user_controller_1.UserController.getUsers);
exports.default = router;
