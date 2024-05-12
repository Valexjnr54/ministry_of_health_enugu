// src/server.ts
import app from './app';
import { Config } from './config/config';

const port = Config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});