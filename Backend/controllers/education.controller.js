import Education from "../models/education.model.js";

 const createEducation = async (req, res) => {
  const newEducation = new Education(req.body);
  try {
    await newEducation.save();
    res.status(201).json({
      message: "educationInfo created successfully",
      data: newEducation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred",
      error: error.message
    });
  }
};

 const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching education data",
      error: error.message,
    });
  }
};

const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEducation = await Education.findByIdAndDelete(id);
    if (!deletedEducation) {
      return res.status(404).json({
        message: "Education not found",
      });
    }
    res.json({
      message: "Education deleted successfully",
      data: deletedEducation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occurred",
      error: error.message,
    });
  }
}

export { createEducation, getEducation, deleteEducation };