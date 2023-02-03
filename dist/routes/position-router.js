import { Router } from "express";
import { getPosition } from "../controllers/position-controller";
const positionRouter = Router();
positionRouter
    // .all("/*", authenticateToken)
    .get("/position", getPosition);
export { positionRouter };
