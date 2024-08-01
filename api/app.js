import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// auth
app.use('/api/auth', authRoute);
// posts
app.use('/api/posts', postRoute);

app.listen(8801, () => {
  console.log('Server is running');
});
