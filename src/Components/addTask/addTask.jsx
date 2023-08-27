import "./addTask.css";

//components
import Button from "../button/button";

//Hooks
import { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState("");

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!task) return;
    props.send(task);
    setTask("");
  };

  // console.log(task);

  return (
    <div className="addTask">
      <form onSubmit={submitForm}>
        <input
          value={task}
          onInput={addTask}
          id="input"
          type="text"
          placeholder="Add your task"
        />
        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
