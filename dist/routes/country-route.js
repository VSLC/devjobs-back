import { Router } from "express";
import { getCountries } from "../controllers/country-controller";
const countryRouter = Router();
countryRouter
    // .all("/*", authenticateToken)
    .get("/countries", getCountries);
export { countryRouter };
