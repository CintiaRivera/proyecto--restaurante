import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';

import './database/database.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
