const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
 const authRouter =require('./routes/authRoute')

const app=express();


app.use(cors());
app.use(express.json())

app.use('/api/auth',authRouter);




mongoose.connect('mongodb://127.0.0.1:27017/Imdb_database').then(()=>console.log('Connected to the MongoDb')).catch((error)=>console.error('Failed to connect to  MongoDb:',error));




app.use((err,res,req,next)=>{
    err.statuCode=err.statuCode||500;
    err.status=err.status||'error';

    res.status(err.statuCode).json({
        status:err.status,
        message:err.message,
    });
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
});