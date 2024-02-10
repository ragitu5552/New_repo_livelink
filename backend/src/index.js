import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRouter from './routes/imageRouter.js';
import textRouter from './routes/textRouter.js';
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.use('/image', imageRouter);

app.use('/text', textRouter);
app.get('/', (req, res) => {
    res.send('Server is running correctly');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


