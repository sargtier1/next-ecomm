/**
 *  next will dispose of unused pages. The serverless architecture will connect when needed.
 *
 *
 * ----------------------
 *
 *
 *  This file replaces the middleware to connect to a db in a regular mern stack application
 */

import mongoose from 'mongoose'

const connection = {}

async function connectDb() {
  if (connection.isConnected) {
    console.log('using existing connection')
    return
  }

  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  console.log('DB connected')
  connection.isConnected = db.connections[0].readyState
}

export default connectDb
