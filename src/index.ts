import { SERVER_PORT } from './config';
import { start } from './app';

async function run() {
  await start(SERVER_PORT);
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
}

run().catch((error) => console.error(error));
