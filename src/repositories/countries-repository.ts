import prisma from "../database/database";

async function findCountries() {
  return prisma.country.findMany();
}

async function findLocationId(location: string) {
  return prisma.country.findMany({
    where: { name: location },
  });
}

const countriesRepository = {
  findCountries,
  findLocationId,
};

export default countriesRepository;
