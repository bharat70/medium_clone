// import { config } from "dotenv";
// config();
import { server } from "./app";
import mongoose from "mongoose";
import env from "./utils/envalid";
import dotenv from 'dotenv';
dotenv.config();

const ff=()=>{
const port=process.env.PORT;
  const mongo=process.env.MONGO_URI;
  const j=process.env.JWT_SECRET;
  const jj=process.env.JWT_REFRESH_SECRET
  const dev=process.env.DEV;
}

mongoose
  .connect(env.MONGO_URI)
  .then(() => server.listen(process.env.PORT))
  .then(() => console.log("Server runninng at PORT :", env.PORT))
  .catch((err) => console.log(err));
