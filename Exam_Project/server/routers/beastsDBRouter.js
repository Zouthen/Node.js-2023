import sqlite3 from 'sqlite3';
import { Router } from 'express';

/*
Terminal guide
 - cd to server folder where examdb.sqlite is located
 - write "sqlite3 examdb.sqlite" to enter sqlite3
 - now you can write sql commands

 - "SELECT * FROM beasts;" to see all the beasts in the database
 - "DELETE FROM beasts WHERE id = 1;" to delete the beast with id 1
 - "INSERT INTO beasts (name) VALUES ('YourBeastName');" to insert a new beast
 - ".exit" to exit sqlite3
*/

const router = Router();

// Create SQLite database instance
const db = new sqlite3.Database('examdb.sqlite');

// Create a 'beasts' table
db.run(`
  CREATE TABLE IF NOT EXISTS beasts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

// INSERT INTO beasts (name) VALUES ('YourBeastName');
router.post('/api/insertBeast', (req, res) => {
  const { name } = req.body;

  db.run('INSERT INTO beasts (name) VALUES (?)', [name], function (err) {
    if (err) {
      console.error('Failed to insert document:', err);
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      console.log('Document inserted with id:', this.lastID);
      res.status(201).send({ message: 'Document inserted successfully' });
    }
  });
});

// SELECT * FROM beasts;
router.get('/api/readBeasts', (req, res) => {
  db.all('SELECT * FROM beasts', (err, rows) => {
    if (err) {
      console.error('Failed to fetch beast names:', err);
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).send(rows);
    }
  });
});

router.delete('/api/deleteBeast/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM beasts WHERE id = ?', [id], function (err) {
    if (err) {
      console.error('Failed to delete document:', err);
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      console.log('Document deleted successfully');
      res.status(200).send({ message: 'Document deleted successfully' });
    }
  });
});


export default router;




/*
import { Router } from 'express';
import { MongoClient } from 'mongodb';

const router = Router();

// Connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB server URI

// Database Name
const dbName = 'examdb';

router.post('/api/insertBeast', async (req, res) => {
  const client = new MongoClient(uri);

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
  const client = new MongoClient(uri);

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

===============================================================
*/


/*import { Router } from "express";
const router = Router();

const beasts = [
    "Hipogriff",
    "Alf",
    "Centaur",
    "Dragon",
    "Thestral",
    "Troll",
    "Basilisk",
    "Phoenix",
    "Merpeople",
    "Pixie",
    "Werewolf",
    "Unicorn",
];

router.get("/beasts", (req, res) => {
    res.send({ data: beasts });
}
);

export default router;
*/