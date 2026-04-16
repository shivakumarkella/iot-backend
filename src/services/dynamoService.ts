import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DevicePayload } from "../types/payload";

const dynamo = new DynamoDBClient({});

export const saveToDynamo = async (data: DevicePayload) => {
  console.log("Would save:", data);
  await dynamo.send(
    new PutItemCommand({
      TableName: "health_device_data",
      Item: {
        deviceId: { S: data.deviceId },
        timestamp: { S: data.timestamp },
        heartRate: { N: data.heartRate.toString() },
        spo2: { N: data.spo2.toString() },
      },
    })
  );
};