import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {useState} from 'react';


export type filterType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Text4", isDone: true},
        {id: 5, title: "Text5", isDone: true},
        {id: 6, title: "Text6", isDone: false},
    ])

    const removeTask = (id: number) => {
        // tasks = tasks.filter(f => f.id !== id)
        setTask(tasks.filter(f => f.id !== id))
    }




    // let isDoneTrue = tasks;
    // const [filterValue, setFilterValue] = useState<filterType>("All");
    // // console.log(filterValue);
    //
    // if (filterValue === "Active") {
    //     isDoneTrue = tasks.filter(f => !f.isDone)
    // } else if (filterValue === "Completed") {
    //     isDoneTrue = tasks.filter(f => f.isDone)
    // }
    //
    //
    // const filteredTasks = (value: filterType) => {
    //     setFilterValue(value)
    // }

    // let isDoneTrue = tasks.filter(f => f.isDone)



    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                // tasks = {isDoneTrue}
                removeTask={removeTask}
                // filteredTasks={filteredTasks}

            />

        </div>
    );
}

export default App;
