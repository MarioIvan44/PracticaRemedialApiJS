import express from "express"
import logoutController from "../controller/login/logoutController.js";

const router = express.Router();

router.route("/").post(logoutController.logout);

export default router;