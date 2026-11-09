import { JobType, type Job } from "../../types/jobs.types";
import { processEmail } from "./email-job";
import { generateReport } from "./generate-report";
import { processImage } from "./process-image";
import { addJob } from "../../modules/jobs/jobs.repository";

export async function processJobs(job: Job) {
  console.log("Process executor entered");

  // console.log(job.type === JobType.SEND_EMAIL);

  switch (job.type) {
    case JobType.SEND_EMAIL:
      await processEmail(job.payload);
      break;
    case JobType.GENERATE_REPORT:
      await generateReport(job.payload);
      break;
    case JobType.PROCESS_IMAGE:
      await processImage(job.payload);
      break;
    default:
      await addJob({ ...job, attempts: job.attempts + 1 });
      break;
  }
}
