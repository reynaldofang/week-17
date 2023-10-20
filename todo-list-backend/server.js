const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Task = mongoose.model('Task', { text: String });

app.post('/api/tasks', async (req, res) => {
  const { text } = req.body;
  const task = new Task({ text });
  await task.save();
  res.status(201).json(task);
});

app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
