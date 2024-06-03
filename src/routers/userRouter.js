import express from "express";
import { checkUser } from "../controllers/controllerUser.js";
import { createUser } from "../controllers/controllerUser.js";
const router = express.Router();

router.route("/user").get(checkUser).post(createUser);

export default router;
