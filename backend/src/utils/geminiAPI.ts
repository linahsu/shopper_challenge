import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import dotenv from "dotenv";

dotenv.config();

const fileManager = new GoogleAIFileManager('AIzaSyAM6IG1FtuDk847g3tgVUXS_Pujlkl0IE4');

const genAI = new GoogleGenerativeAI('AIzaSyAM6IG1FtuDk847g3tgVUXS_Pujlkl0IE4');

export {
    fileManager,
    genAI
};