const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURL = "mongodb://mongo:hm06glrlF7qYBkjPgmAG@containers-us-west-175.railway.app:7213"; // Ganti dengan URL MongoDB Anda

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: " + error);
  });

const taskSchema = new mongoose.Schema({
  title: String,
});

const Task = mongoose.model("Task", taskSchema);

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/tasks", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = new Task({ title });
  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    console.error("Error adding task: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params;

  if (!mongoose.isValidObjectId(taskId)) {
    return res.status(400).json({ error: "Invalid task ID" });
  }

  try {
    await Task.findByIdAndDelete(taskId);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
