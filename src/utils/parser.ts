import { DevicePayload } from "../types/payload";

export const parseMessage = (body: string): DevicePayload => {
  let jsonString = body;

  try {
    const decoded = Buffer.from(body, "base64").toString("utf-8");

    if (decoded.startsWith("{")) {
      jsonString = decoded;
    }
  } catch {
    // ignore, fallback to raw body
  }

  try {
    return JSON.parse(jsonString);
  } catch {
    throw new Error("Invalid JSON format");
  }
};