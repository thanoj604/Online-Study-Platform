import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000
const MongoDB = process.env.MongoDB;

try{
    mongoose.connect(MongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
} catch(error) {
    console.log("error");

}

app.use("/book",bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})