import prisma from "../database/database";

async function findCountries() {
  return prisma.country.findMany();
}

const countriesRepository = {
  findCountries,
};

export default countriesRepository;
