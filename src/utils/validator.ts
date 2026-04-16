import { DevicePayload } from "../types/payload";

export const validatePayload = (data: DevicePayload): void => {
  if (!data.deviceId || typeof data.deviceId !== "string") {
    throw new Error("Invalid or missing deviceId");
  }

  if (!data.timestamp || typeof data.timestamp !== "string") {
    throw new Error("Invalid or missing timestamp");
  }

  if (typeof data.heartRate !== "number") {
    throw new Error("Invalid heartRate");
  }

  if (typeof data.spo2 !== "number") {
    throw new Error("Invalid spo2");
  }
};