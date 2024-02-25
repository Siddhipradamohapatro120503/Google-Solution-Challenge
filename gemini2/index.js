import bodyParser from "body-parser";
import cors from 'cors';
import { generateResponse } from "./controller/index.js";

import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT;
// export const history = [];
//middleware to parse the body content to JSON



app.use(bodyParser.json());
app.use(cors()); 

app.post("/generate", generateResponse);

app.get("/generate", (req, res) => {
    res.send(history);
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

