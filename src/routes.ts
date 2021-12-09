import { Router } from 'express';

const router = Router();

router.get('/todo', (req, res) => {
  res.send('Hello World!');
});

export { router };
