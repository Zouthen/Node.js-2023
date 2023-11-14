import db from "./connection.js";

await db.albums.updateMany({}, { $set: { label: "EMI" } });