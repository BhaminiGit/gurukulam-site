import { getDb } from './connect.js';

export default async function handler(req, res) {

    console.log("MONGODB_URI:", process.env.MONGODB_URI);


    try {
        const db = await getDb();
        const tasksCollection = db.collection('Tasks');

        if (req.method === 'GET' ) {
            const tasks = await tasksCollection.find().toArray();
            res.status(200).json(tasks);
        }
        else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    }
    catch (error) {
        console.error('API error:', error);
        res.status(500).json({ error: 'Server error' });
    }

}