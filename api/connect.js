import { MongoClient } from "mongodb";


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