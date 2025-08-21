import { MongoClient } from "mongodb";

const uri = process.env.URI; 
const options = {};

let client;
let clientPromise;

if (!process.env.URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable so the connection is not re-created on every hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
