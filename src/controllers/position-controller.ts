import { Response, Request } from "express";
import httpStatus from "http-status";
import positionRepository from "../repositories/position-repository";

export async function getPosition(req: Request, res: Response) {
  try {
    const positions = await positionRepository.findPositions();
    return res.status(httpStatus.OK).send(positions);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
