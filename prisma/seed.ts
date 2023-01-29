import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const countriesList = [
    "Brazil",
    "United States",
    "Canada",
    "Germany",
    "United Kingdom",
  ];
  const positionList = [
    "Software Engineer",
    "QA",
    "Suport Engineer",
    "Database Administrator",
  ];
  for (let i = 0; i < countriesList.length; i++) {
    const countrySeed = await prisma.country.create({
      data: {
        name: countriesList[i],
      },
    });
  }
  for (let j = 0; j < positionList.length; j++) {
    const positionSeed = await prisma.position.create({
      data: {
        name: positionList[j],
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
