import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { useState } from "react";

export type filterType = "All" | "Active" | "Completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Text 4", isDone: true },
    { id: 5, title: "Text 5", isDone: false },
  ]);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  // const [filterValue, setFilterValue] = useState<filterType>("All");
  // let isDoneTrue = tasks;
  // if (filterValue === "Active") {
  //   isDoneTrue = tasks.filter((f) => !f.isDone);
  // }
  // if (filterValue === "Completed") {
  //   isDoneTrue = tasks.filter((f) => f.isDone);
  // }
  // const filteredTasks = (value: filterType) => {
  //   setFilterValue(value);
  // };

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasks}
        removeTask={removeTask}
        // filteredTasks={props.removeTask()}
      />
    </div>
  );
}

export default App;
