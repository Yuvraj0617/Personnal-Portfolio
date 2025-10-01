import Project from "../models/overview.model.js";
import { uploadImage } from "../utils/cloundinary.utils.js";

const createProject = async (req, res) => {
    const file = req.file?.path;
    if (!file) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }

    try{
        const cloudinaryResponse = await uploadImage(file);
        if (!cloudinaryResponse) {
            return res.status(500).json({
                message: "Failed to upload image to Cloudinary"
            });
        }
        const newProject = new Project({
            ...req.body, 
            projectImg: cloudinaryResponse.secure_url 
        });

        await newProject.save();
        res.status(201).json({
            message: "Project Create successfully",
            data : newProject
        });
    }catch(error){
        res.status(500).json({
            message: "Failed to create project",
            error: error.message
        });
    }
}

const getProject =async (req,res) => {
    try {
        const project= await Project.find();
        res.json(project)
    } catch (error) {
        res.status(500).json({
            message: "Failed to create project",
            error: error.message
        });
    }
}

const deleteProject= async(req,res)=>{
    const { id }= req.params;
    try {
        const newdeleteProject= await Project.findByIdAndDelete(id);
        if(!newdeleteProject){
            return res.status(404).json({
                message:"Project not founded"
            });
        }

        res.status(200).json({
            message:"Project Deleted Successfully",
            data:newdeleteProject
        });
    } catch (error) {
        res.status(500).json({
            message:"Fail to delete project",
            error:error.message
        })
    }
}
export { createProject, getProject,deleteProject}; 

