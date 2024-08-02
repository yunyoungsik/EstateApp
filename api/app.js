import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import testRoute from './routes/test.route.js';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// auth
app.use('/api/auth', authRoute);
// user
app.use('/api/users', userRoute);
// posts
app.use('/api/posts', postRoute);
// test
app.use('/api/test', testRoute);

app.listen(8801, () => {
  console.log('Server is running');
});
