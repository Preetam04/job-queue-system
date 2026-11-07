export interface Job {
  id: string;
  type: JobType;
  payload: JSON;
  attempts: number | 0;
}

export enum JobType {
  SEND_EMAIL,
  GENERATE_REPORT,
  PROCESS_IMAGE,
}
