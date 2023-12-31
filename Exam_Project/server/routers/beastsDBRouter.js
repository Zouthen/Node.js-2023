import sqlite3 from 'sqlite3';
import { Router } from 'express';
const router = Router();

const db = new sqlite3.Database('examdb.sqlite');

db.run(`
  CREATE TABLE IF NOT EXISTS beasts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

router.post('/api/insertBeast', (req, res) => {
  const { name } = req.body;
  db.run('INSERT INTO beasts (name) VALUES (?)', [name], function (err) {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(201).send({ message: 'Document inserted successfully' });
    }
  });
});

router.get('/api/readBeasts', (req, res) => {
  db.all('SELECT * FROM beasts', (err, rows) => {
    if (err) {
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
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).send({ message: 'Document deleted successfully' });
    }
  });
});


export default router;