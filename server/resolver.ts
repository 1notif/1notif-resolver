import express, { Express, Request, Response } from 'express';
import { resolveLabel } from './exm';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  const label: any = req.headers.host?.split(".")?.[0] ?? false;
  if (label) {
    const response = await resolveLabel(label);
    res.send(response);
    return;
  }
  res.send({ error: 'follow me on twitter! @bobchah' });
  return;
});

app.listen(port, async () => {
  console.log(`⚡️ [1notif]: Server is running at: ${port}`);
});
