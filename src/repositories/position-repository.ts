import prisma from "../database/database";

async function findPositions() {
  return prisma.position.findMany();
}

const positionRepository = {
  findPositions,
};

export default positionRepository;
