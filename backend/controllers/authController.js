const User=require('../models/useModel');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const createError=require('../utils/appError');


exports.signup=async(req,res,next)=>{
try{
    const user= await User.findOne({email:req.body.email});
if(user){
    return next(new createError("User exsists!",400))
}
const hashedPassword= await bcrypt.hash(req.body.password,12);

const newUser=await User.create({
    ...req.body,
    password: hashedPassword,
});

const token= jwt.sign({id: newUser._id},'secretkey123',{
    expiresIn:'90d',
});

res.status(201).json({
    status:'succes',
    message:'user registered successfully',
    token,
    user:{
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
    },
});


}
catch(error){
    next(error);
}





};

exports.login= async(req,res,next)=>{
    try{
const{email,password}=req.body;

if(!user) return next(new createError('User not found',404))

    const isPasswordValid= await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return next(new createError('Invalid email or password',404));
    }

    const token= jwt.sign({_id: user._id},'secretkey123',{
        expiresIn:'90d',
    });

    res.status(200).json({
        status:'success',
        token,
        message:'Logged in successfully',
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    })
}catch(error){
next(error);
    }
};