import prisma from "../database/database";
async function findJobs() {
    return prisma.jobs.findMany({
        include: {
            country: true,
            position: true,
        },
    });
}
async function findJobById(jobId) {
    return prisma.jobs.findUnique({
        where: { id: jobId },
        include: {
            country: true,
            position: true,
        },
    });
}
async function insertJobs({ companyName, logo, countryId, positionId, description, contract, website, content, }) {
    return prisma.jobs.create({
        data: {
            companyName: companyName,
            logo: logo,
            contract: contract,
            countryId: countryId,
            positionId: positionId,
            description: description,
            content: content,
            website: website,
        },
    });
}
async function deleteJob(jobId) {
    return prisma.jobs.delete({
        where: { id: jobId },
    });
}
const jobsRepository = {
    findJobs,
    insertJobs,
    deleteJob,
    findJobById,
};
export default jobsRepository;
