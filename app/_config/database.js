import mongoose from "mongoose";

let connected = false

const connectDB = async () =>{
    mongoose.set('strictQuery', true)

    //If already connected, don't connect again

    if(connected) {
        console.log('MongoDb is already connected...')
        return
    }

    //Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log("MongoDB connected...")
    }catch (error) {
        console.log(error)
    }
    // let isConnected = false;

    // async function connectDB() {
    //   if (isConnected) return;
      
    //   try {
    //     await mongoose.connect(process.env.MONGODB_URI, {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //     });
    //     isConnected = true;
    //   } catch (error) {
    //     console.error("MongoDB connection error:", error);
    //     throw new Error("Database connection failed");
    //   }
    // }
}

export default connectDB

