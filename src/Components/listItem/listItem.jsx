import React from "react";
import "./listItem.css";

import Button from "../button/button";

function ListItem(props) {
  return (
    <li>
      <span>{props.task}</span>
      <Button click={props.remove}>Delete Task</Button>
    </li>
  );
}

export default ListItem;
