import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AdminData= async (req,res) => {
    try {
        const { password } = req.body;
        await bcrypt.hash(password, 10);
        res.status(201).json({
            message:"Admin created successfully",
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            error:error.message
        });
    }
}

const LoginPost= async (req,res)=>{
    const {email,password}=req.body || {};
    try {
        const user =await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Aap kun"
            });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
 
        if (!passwordMatch) {
            return res.status(401).json({
                message:"kun ho bhai",
            });
        }
        
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'None' });
        res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message:"Something is wrong in Login Part",
            error:error.message
        });
    }
}

const LoginGet= async (req,res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
export {LoginPost,AdminData,LoginGet};
