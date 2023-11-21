import db from "./connection.js";

await db.albums.deleteOne({ title: "Shine On Your Crazy Diamond" });