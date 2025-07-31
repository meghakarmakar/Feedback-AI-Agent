import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('❌ Please define the MONGODB_URI environment variable in .env');
}

// Global is used here to maintain a cached connection across serverless invocations
let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'Feedback_Agent',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then((mongoose) => {
    return mongoose;
  });
}


cached.conn = await cached.promise;
global.mongoose = cached;
console.log("MongoDB Connected");

  return cached.conn;
}
