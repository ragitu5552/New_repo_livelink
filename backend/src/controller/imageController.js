import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY});

export const generateImage = async (req,res) => {
    const input = req.query.input;
    const image = await openai.images.generate({ model: "dall-e-3", prompt: input });

    return res.status(200).send(image.data[0].url);
}