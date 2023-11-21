// create in albums "shine on your crazy diamond"
import db from "./connection.js";

await db.albums.insertOne({title: "Shine On Your Crazy Diamond", score: 9.8 });