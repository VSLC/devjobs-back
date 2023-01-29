import { Response,Request } from "express";
import {}
import httpStatus from "http-status";

export async function getJobs(res:Response,req:Request){
  try {
  const jobs = await jobService.getJobs();
    res.status().send(jobs);
  }
  catch(error){

  }
  
}