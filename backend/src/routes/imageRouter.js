import express from 'express';
import { generateImage } from '../controller/imageController.js';

const imageRouter = express.Router();

imageRouter.get('/',generateImage);

export default imageRouter;