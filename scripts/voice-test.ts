import { sendVoiceBroadcast } from "../src/lib/voice";
import dotenv from "dotenv";

dotenv.config();

async function runTest() {
  console.log("Testing MRAM Voice Broadcast...");

  const res = await sendVoiceBroadcast({
    title: "Test Broadcast From Script",
    broadcast_id: 1525, // Using a sample broadcast ID
    numbers: ["01700000000"], // Example test number
  });

  console.log("Result:", res);
}

runTest();
