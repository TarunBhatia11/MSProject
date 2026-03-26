import express from 'express';
import cors from 'cors';
import connectDB from './db/dbConnection.js';

//import port number from .env file
const PORT = process.env.PORT; 

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);






app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}/`);
    
})