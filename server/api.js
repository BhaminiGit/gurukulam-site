import { getDb } from './connect.js';

export default async function handler(req, res) {

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Only GET requests allowed' });
    }

    try {
        const db = await getDb();
        const tasks = await db.collection('Tasks').find().toArray();
       
         res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(tasks));
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch tasks' }));
    }


}