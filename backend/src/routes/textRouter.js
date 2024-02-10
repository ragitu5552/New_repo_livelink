import express from 'express';
import { generateText } from '../controller/textController.js';


const textRouter = express.Router();

textRouter.get('/', generateText );

export default textRouter;