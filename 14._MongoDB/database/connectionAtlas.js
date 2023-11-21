import "dotenv/config";
import { MongoClient, ServerApiVersion } from 'mongodb';

console.log(MONGODB_PASSWORD);
const uri = `mongodb+srv://mura0717:${process.env.MONGODB_PASSWORD}@cluster0.pmuppll.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = await client.db("pink_floyd");
    const albums = await db.collection("albums");
    const foundAlbums = await albums.collection.find().toArray();
    console.log(foundAlbums);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);