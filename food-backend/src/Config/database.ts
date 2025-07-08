import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        (await mongoose.connect(process.env.MONGODB_URI as string)).Connection;
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    
};
        