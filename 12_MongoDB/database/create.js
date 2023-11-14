import db from "./connection.js"


await db.albums.insertOne({ title: "Shine On You Crazy Diamond", score: 9.8 });