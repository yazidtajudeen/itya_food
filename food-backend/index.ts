import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './src/Config/database'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(" Failed to connect to database:", error);
    process.exit(1);
  });


