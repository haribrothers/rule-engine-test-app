import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { itemsRouter } from "./items/items.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use("/api/menu/items", itemsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    respones: 'Hello',
  });
});

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
