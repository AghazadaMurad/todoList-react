import "./button.css";

function Button(props) {
  return (
    <button onClick={props.click} className="btn">
      {props.children}
    </button>
  );
}

export default Button;
