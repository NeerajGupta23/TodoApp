import BackForwardButton from "../BackForwardButton/BackForwardButton";
import "./Todo_Section.css";

export default function Todo_Secion({
  title,
  Due_Date,
  discription,
  onSelect,
}) {
  let buttonContent = "<";

  return (
    <section id="todo-component">
      <div id="todo-header">
        <span>
          <BackForwardButton onSelect={onSelect}>
            {buttonContent}
          </BackForwardButton>
        </span>
        <span id="todo-title">{title}</span>
        <span id="completed">
          <input type="checkbox" />
          Complete
        </span>
      </div>
      <b className="hr_diff"></b>
      <div id="todo-discription">{discription}</div>
      <div id="todo-time">Due Date : {Due_Date} </div>
    </section>
  );
}
