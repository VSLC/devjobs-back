import { Response, Request } from "express";
import httpStatus from "http-status";
import { Job } from "../protocols";
import jobRepository from "../repositories/job-repository";

export async function getJobs(req: Request, res: Response) {
  try {
    const jobs = await jobRepository.findJobs();
    res.status(httpStatus.OK).send(jobs);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getJobById(req: Request, res: Response) {
  const jobId = Number(req.params.jobId);

  if (!jobId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const jobById = await jobRepository.findJobById(jobId);
    res.status(httpStatus.OK).send(jobById);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function postJobs(req: Request, res: Response) {
  try {
    let {
      companyName,
      logo,
      positionId,
      countryId,
      contract,
      website,
      description,
      content,
    } = req.body as Job;
    const insertJob = await jobRepository.insertJobs({
      companyName,
      logo,
      positionId,
      countryId,
      contract,
      description,
      content,
      website,
    });
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteJob(req: Request, res: Response) {
  let { jobId } = req.params;
  console.log(jobId);

  try {
    const deleteJob = await jobRepository.deleteJob(Number(jobId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
