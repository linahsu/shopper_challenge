import { GoogleAIFileManager } from "@google/generative-ai/server";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleAIFileManager(process.env.API_KEY as string);

export default genAI;