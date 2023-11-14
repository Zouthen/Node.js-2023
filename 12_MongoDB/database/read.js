import db from "./connection.js";

// const allAlbums = await db.albums.find().toArray();
// console.log(allAlbums);

const favoriteAlbum = await db.albums.find({ title: "Piper at the gates of dawn" }).toArray();
console.log(favoriteAlbum);