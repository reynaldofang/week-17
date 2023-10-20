import React, { useState } from "react";
import AddTask from "../src/components/AddTask";
import ListTask from "../src/components/ListTask";
import Box from "@mui/material/Box";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"

    >
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <ListTask tasks={tasks} onTaskDelete={handleTaskDelete} />
    </Box>
  );
}

export default App;
