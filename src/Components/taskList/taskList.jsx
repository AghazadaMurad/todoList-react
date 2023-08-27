import "./taskList.css";

//componets
import ListItem from "../listItem/listItem";
const TaskList = (props) => {
  return (
    <div className="taskList">
      <ul>
        {props.tasks.map((task, index) => (
          <ListItem
            key={index}
            remove={props.remove.bind(null, index)}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
