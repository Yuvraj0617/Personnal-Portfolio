import Overview from "../models/overview.model.js";

const updatedOverview = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedOverview = await Overview.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedOverview) {
      return res.status(404).json({
        message: "Overview not found",
      });
    }
    res.status(200).json({
      message: "Overview updated successfully",
      data: updatedOverview,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred",
      error: error.message,
    });
  }
};

const getOverview = async (req, res) => {
  try {
    const overview = await Overview.find();
    res.json(overview);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching overview data",
      error: error.message,
    });
  }
};

export { updatedOverview, getOverview };
