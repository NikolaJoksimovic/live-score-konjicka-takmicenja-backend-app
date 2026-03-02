import { Router } from "express";
import { getAllMatches } from "../controllers/controllers";

const router = Router();

router.get("/", getAllMatches);

export default router;
