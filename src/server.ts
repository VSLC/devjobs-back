import express from "express";
import { countryRouter } from "./routes/country-route.js";
import { jobRouter } from "./routes/job-route.js";
import cors from "cors";
import { positionRouter } from "./routes/position-router.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(positionRouter);
server.use(countryRouter);
server.use(jobRouter);

server.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
