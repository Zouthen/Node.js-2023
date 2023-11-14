import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
await client.connect();

const dbName = "pink_floyd_albums";
const db = await client.db(dbName);

export default {
    albums: db.collection("albums"),
    members: db.collection("members")
};
