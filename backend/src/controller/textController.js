import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY});

export const generateText = async (req,res) => {
    const input = req.query.input;
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });

  return res.status(200).send(completion.choices[0].message.content);
}