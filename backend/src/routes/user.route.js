import { Router } from "express";

import {
    registerController,
    loginController,
    meController,
    logoutController
} from "../controllers/user.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController)
router.get("/me", authenticate, meController);

export default router;