import express from "express";
import { countryRouter } from "./routes/country-route";
import { jobRouter } from "./routes/job-route";
import cors from "cors";
import { positionRouter } from "./routes/position-router";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

server.use(positionRouter);
server.use(countryRouter);
server.use(jobRouter);

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
