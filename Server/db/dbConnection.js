import mongoose from 'mongoose';


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connection Created Successfully!! ');
        
    } catch (error) {
        console.error("Coonection Failed", error.message);
        process.exit(1);
    }
}

export default connectDB;