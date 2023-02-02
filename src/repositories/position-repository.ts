import prisma from "../database/database";

async function findPositions() {
  return prisma.position.findMany();
}

async function findPositionId(position: string) {
  return prisma.position.findMany({
    where: { name: position },
  });
}

const positionRepository = {
  findPositions,
  findPositionId,
};

export default positionRepository;
