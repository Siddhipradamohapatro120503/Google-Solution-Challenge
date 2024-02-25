import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(process.env.API_KEY);

// Model initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

export const history = [];

export const generateResponse = async (req, res) => {
    try {
      const { prompt } = req.body;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
  
      history.push(text);
      console.log(history);
  
      res.send({ response: text });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };