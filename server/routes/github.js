import express from "express";
import { scanGitHub } from "../controllers/githubController.js";
const router = express.Router();

router.post("/scan", scanGitHub);

export default router;
