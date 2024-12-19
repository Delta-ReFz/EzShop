import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import cors from 'cors';
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json()); // Allows us to accept JSON data in the body ==> req.body
app.use(cors());

// API routes
app.use("/api/products", productRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.resolve(__dirname, "frontend", "dist");

    // Serve static files from the dist directory
    app.use(express.static(frontendPath));

    // Serve the index.html file for any other route
    app.get("*", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
