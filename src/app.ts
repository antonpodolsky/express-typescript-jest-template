import express from 'express';
import http from 'http';
import { getIndexResponse } from './demo';

const app = express();

app.get('/', (req, res) => {
  res.send(getIndexResponse());
});

export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve) => {
    server.listen(process.env.PORT || port, resolve);
  });
};
