import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { DevicePayload } from "../types/payload";

const s3 = new S3Client({});

export const saveToS3 = async (data: DevicePayload) => {
  await s3.send(
    new PutObjectCommand({
      Bucket: "health-device-raw-data-001-570082719566-ap-south-1-an",
      Key: `${data.deviceId}/${data.timestamp}.json`,
      Body: JSON.stringify(data),
    })
  );
};