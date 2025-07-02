import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

import cors from "cors";

import express, { urlencoded } from "express";
import dbConnect from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import { default as paymentRoutes } from "./routes/payment.route.js";
import productRoutes from "./routes/product.route.js";


const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();



app.use(express.json({limit:"10mb"}));
app.use(cookieParser());
app.use(urlencoded());
console.log(process.env.CLIENT_URL);
app.use(
  cors({
      origin:process.env.CLIENT_URL,
      credentials:true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);


async function startServer() {
    try {
        await dbConnect();
        console.log("Database connected Succesfully");
        
        app.listen(PORT, () => { console.log(`server running on ${PORT}`); })
         
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
    }
}



startServer();
