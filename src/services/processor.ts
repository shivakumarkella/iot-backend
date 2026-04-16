import { parseMessage } from "../utils/parser";
import { validatePayload } from "../utils/validator";
import { saveToDynamo } from "./dynamoService";
import { saveToS3 } from "./s3Service";

export const processRecord = async (body: string) => {
  const payload = parseMessage(body);

  validatePayload(payload);

  await Promise.all([
    saveToDynamo(payload),
    saveToS3(payload),
  ]);
};