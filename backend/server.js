import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './model/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows us to accept JSON data in the body ==> req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});

