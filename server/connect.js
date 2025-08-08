import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const uri = process.env.MONGODB_URI;

let cachedClient = null;


export async function getDb() {

    if (!cachedClient) {
        const client = new MongoClient(uri)
        await client.connect();
        cachedClient = client;
    }

    return cachedClient.db("ToDoApp")


}