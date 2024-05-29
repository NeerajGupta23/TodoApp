import "./Todo_Section_small.css";
import BackForwardButton from "../BackForwardButton/BackForwardButton";

export default function Todo_Secion_Small({
  index,
  title,
  Due_Date,
  onSelect,
}) {
  let arrow = ">";
  return (
    <section className="todo-component-small">
      <div id="todo-component-id">{index + 1}</div>
      <div id="todo-detail">
        <div id="todo-header-small">
          <span id="todo-title-small">{title}</span>
          <span id="completed-small" className="float-right">
            <input type="checkbox" />
            Complete
          </span>
        </div>
        <div id="todo-time-small">
          <span>Due Date : {Due_Date}</span>
          <span className="float-right-more">
            <BackForwardButton onSelect={onSelect}>{arrow}</BackForwardButton>
          </span>
        </div>
      </div>
    </section>
  );
}
