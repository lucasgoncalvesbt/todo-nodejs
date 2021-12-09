import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.listen(3333, () => {
  console.log('Listening on port 3333 🚀');
});
