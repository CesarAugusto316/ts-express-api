import { Request, Response } from 'express';
import { app } from './src/app';
import { connectDb } from './src/data-source';


const PORT = process.env.PORT || 3_000;
connectDb();

// mounting routers
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello world',
    todos: []
  });
});

app.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    user: {
      name: req.body.name
    }
  });
});

app.listen(PORT, () => {
  console.log('[NODE_ENV ⚡]', process.env.NODE_ENV);
  console.log(`[Server ⚡] running on port ${PORT}.`);
});
