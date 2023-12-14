import { Router } from 'express';
import { MongoClient } from 'mongodb';

const router = Router();

// Connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB server URI

// Database Name
const dbName = 'examdb';

router.post('/api/insertBeast', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db(dbName);
    const collection = database.collection('beasts');

    const { name } = req.body;

    const result = await collection.insertOne({ name });
    console.log(`Document inserted with _id: ${result.insertedId}`);

    res.status(201).send({ message: 'Document inserted successfully' });
  } finally {
    await client.close();
    console.log('Connection closed');
  }
});

router.get('/api/readBeasts', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db(dbName);
    const collection = database.collection('beasts');

    const cursor = collection.find();
    const documents = await cursor.toArray();

    res.status(200).send(documents);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
});

export default router;
