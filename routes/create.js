const router = require("express").Router();
const Task = require("../models/task");

//creat new task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      taskStatus: req.body.taskStatus,
    });

    const task = await newTask.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
