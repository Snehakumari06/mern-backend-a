import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
dotenv.config();

const app = express();


app.use(express.static("public"));    //jo bhi file hai wo isme wo return karega
app.use(cors()); // able to call apis


const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

  mongoose
  .connect(`mongodb+srv://${dbuser}:${dbpass}@sneha.tbgpj9n.mongodb.net/merndb?retryWrites=true&w=majority&appName=Sneha`)
  
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use(express.json());

app.use("/api/users", userRouter);
