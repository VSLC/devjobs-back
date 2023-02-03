import httpStatus from "http-status";
import positionRepository from "../repositories/position-repository";
export async function getPosition(req, res) {
    try {
        const positions = await positionRepository.findPositions();
        return res.status(httpStatus.OK).send(positions);
    }
    catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}
