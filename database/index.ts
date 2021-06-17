import mongoose from "mongoose";

import dotenv from "dotenv";
const { config } = dotenv
config()
const uri = process.env.VITE_API
mongoose.connect(uri)