import http from 'http';
import dotenv from 'dotenv';
import handler from './api.js';
import path from 'path';

import { getDb } from './connect.js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const PORT = process.env.PORT || 5001;

async function startServer() {
  const db = await getDb();

  const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.url.startsWith('/api/tasks')) {
      req.db = db; // attach db to the request object
      handler(req, res); // use your app.js handler here
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
