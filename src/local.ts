import { handler } from "./services/handler";
import * as fs from "fs";

const event = JSON.parse(fs.readFileSync("event.json", "utf-8"));

handler(event)
  .then((res) => {
    console.log("Success:", res);
  })
  .catch((err) => {
    console.error("Error:", err);
  });