import dotenv from "dotenv";
import { setupClient } from "./tg.js";
import { getLatest } from "./dex.js";
import { format } from "./message.js";
import express from "express";

dotenv.config();
const env = process.env;
const app = express();

app.get("/", (req, res) => {
  res.send("alive");
});

app.listen(env.PORT, async () => {
  console.log(`App running on port ${env.PORT}`);

  const client = await setupClient();
  client.setParseMode("html");

  setInterval(async () => {
    const latest = await getLatest();
    const message = format(latest);
    console.log(message)
    await client.sendMessage(env.CHANNEL_NAME, { message });
    console.log("Message sent.");
  }, env.INTERVAL);
});
