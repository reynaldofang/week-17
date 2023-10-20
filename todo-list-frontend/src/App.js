import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const apiUrl = "https://api-reynaldo16.cyclic.app"; // Ganti dengan URL backend Anda

  const fetchTasks = () => {
    axios
      .get(`${apiUrl}/api/tasks`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = (task) => {
    axios
      .post(`${apiUrl}/api/tasks`, { title: task })
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const handleTaskDelete = (taskId) => {
    axios
      .delete(`${apiUrl}/api/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== taskId));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <ListTask tasks={tasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
