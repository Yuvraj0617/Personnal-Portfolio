import Overview from "../models/overview.model.js";
import Project from "../models/project.model.js";
import Education from "../models/education.model.js";
import nodemailer from "nodemailer";

const getHomePage = async (req, res) => {
    try {
        const [overview, projects, education] = await Promise.all([
            Overview.find(),
            Project.find(),
            Education.find()
        ]);
        res.status(200).json({
            overview,
            projects,
            education
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

let sendEmail=async(req,res)=>{
    const {name,email,message,subject}=req.body;
    if(!name || !email || !message || !subject){
        return res.status(400).json({
            message:"All fields are required"
        });
    }
    try {
        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:process.env.GMAIL_USER,
                pass:process.env.GMAIL_PASS
            }
        });
        const mailOptions={
            from:`"${name}" <${process.env.GMAIL_USER}>`,
            to:process.env.GMAIL_USER,
            replyTo:email,
            subject:subject,
            text:message
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            message:"Email sent successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message:"Internal Server Error Email can't be sent",
            error:error.message
        });
    }
}

export  {getHomePage, sendEmail}