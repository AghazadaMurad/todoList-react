//Components
import AddTask from "./Components/addTask/addTask";
import TaskList from "./Components/taskList/taskList";

//hooks
import { useState } from "react";
const App = () => {
  const [tasks, setTask] = useState([]);

  const sendData = (task) => {
    const newTask = [...tasks, task];
    setTask(newTask);
  };

  const removeTask = (index) => {
    const filteredTasks = [...tasks];
    filteredTasks.splice(index, 1);
    setTask(filteredTasks);
  };

  return (
    <div>
      <AddTask send={sendData} />
      {tasks.length > 0 && <TaskList remove={removeTask} tasks={tasks} />}
    </div>
  );
};

export default App;
