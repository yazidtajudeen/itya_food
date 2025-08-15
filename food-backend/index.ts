import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import {connectDB} from './src/Config/database'
import routes from './src/routes'
import { errorHandler } from './src/middleware'
dotenv.config();

const app = express();

const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').filter(Boolean)
app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true, methods: ['GET','POST','PUT','PATCH','DELETE'], credentials: true }))
app.use(helmet())
app.use(express.json({ limit: '1mb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 })
app.use(limiter)

app.get('/health', (_req, res) => { res.json({ status: 'ok' }); });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', routes)

app.use(errorHandler)

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


