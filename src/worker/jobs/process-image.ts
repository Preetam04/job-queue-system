import type { Job } from "../../types/jobs.types";

async function processImage(data: JSON) {
  console.log("image processing is starting");

  await new Promise((resolve, reject) => setTimeout(resolve, 1000));

  console.log("Image processed");
}

export { processImage };
