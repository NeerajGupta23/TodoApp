import { useState } from "react";
import Todo_Secion from "./component/Todo_Section/Todo_Section.jsx";
import Todo_Secion_Small from "./component/Todo_Section_Small/Todo_Section_Small.jsx";
import data from "./data.json";

function App() {
  let [expandContent, setExpandContent] = useState(undefined);
  function todoExpand(index) {
    setExpandContent(() => {
      console.log(index);

      return (
        <Todo_Secion
          {...data.data_Array[index]}
          onSelect={() => setExpandContent(undefined)}
        />
      );
    });
  }

  let todo_small = [];
  if (expandContent == undefined) {
    let j = 0;
    for (let d of data.data_Array) {
      let i = j;
      todo_small.push(
        <Todo_Secion_Small
          key={i}
          index={i}
          {...d}
          onSelect={() => todoExpand(i)}
        />
      );
      j++;
    }
  }

  return (
    <>
      {expandContent == undefined && todo_small}
      {expandContent != undefined && expandContent}
    </>
  );
}

export default App;
