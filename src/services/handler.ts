import { SQSEvent } from "../types/event";
import { processRecord } from "./processor";

export const handler = async (event: SQSEvent) => {
  for (const record of event.Records) {
    try {
      await processRecord(record.body);
    } catch (error) {
      console.error("Error processing record:", error);
    }
  }

  return { status: "processed" };
};