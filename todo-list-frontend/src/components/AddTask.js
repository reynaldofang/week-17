import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") {
      return;
    }

    onAddTask(task);
    setTask("");
  };

  return (
    <div className="col-12 col-sm-9 col-lg-8 col-xl-6 col-xxl-4">
      {" "}
      {/* Mengatur lebar kolom */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            fullWidth
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTask;
