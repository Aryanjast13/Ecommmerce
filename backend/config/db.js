import mongoose from "mongoose";



async function dbConnect() {
    try {
        const client = await mongoose.connect(process.env.MONGO_URI);
        return client;

    } catch (error) {
        console.log(`MongoDB connection error: `, error.message);
        throw error;
    }
}

export default dbConnect;

