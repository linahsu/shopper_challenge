import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import dotenv from "dotenv";

dotenv.config();

const fileManager = new GoogleAIFileManager(process.env.API_KEY as string);

const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

export {
    fileManager,
    genAI
};