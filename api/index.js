import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import path from 'path';

import ProductRouter from "./routes/ProductRoute.js"

dotenv.config({ path: "./config/.env" })

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(path.resolve(), 'public')));

const PORT = process.env.PORT ?? 3001
// Connect to database
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log("Error in connect databse : ", err)
    }
}

// Routes
app.use('/api', ProductRouter)


// Connect database and start server
await connectDatabase()
app.listen(PORT, () => {
    console.log(`server is running on  locahost:${PORT}`)
})