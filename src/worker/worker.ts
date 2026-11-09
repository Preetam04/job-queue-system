import * as jobRepository from "../modules/jobs/jobs.repository";
import type { Job } from "../types/jobs.types";
import { processJobs } from "./jobs/process-jobs";

while (true) {
  // console.log("Worker entered");
  // get data from redis if by waiting for the data
  const data = await jobRepository.waitForNextJob();

  // console.log("data fetched");

  if (data === null) continue;
  // console.log("data validated");

  if (data.attempts >= 3) {
    console.log("Job attempts exhausted");
    continue;
  }
  // console.log("attempts validated");

  // console.log(data.type);

  await processJobs(data);
}
