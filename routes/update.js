const router = require("express").Router();
const Task = require("../models/task");

//UPDATE TASK
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
