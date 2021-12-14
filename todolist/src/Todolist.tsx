import React from 'react';
import {filterType} from './App';
import {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    // filteredTasks: (value: filterType) => void
}

export function Todolist(props: PropsType) {
    // debugger
    // let isDoneTrue = props.tasks;
    let [isDoneTrue, setIsDoneTrue] = useState(props.tasks);

    const [filterValue, setFilterValue] = useState<filterType>("All");

    // if (filterValue === "Active") {
    //     isDoneTrue = props.tasks.filter(f => !f.isDone)
    // } else if (filterValue === "Completed") {
    //     isDoneTrue = props.tasks.filter(f => f.isDone)
    // }


    if (filterValue === "Active") {
        setIsDoneTrue(props.tasks.filter(f => !f.isDone))
    }
    if (filterValue === "Completed") {
        setIsDoneTrue(props.tasks.filter(f => f.isDone))
    }
    //
    //
    const filteredTasks = (value: filterType) => {
        setFilterValue(value)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((item, i) => {

                return (
                    <li key={item.id}>
                        <button onClick={() => props.removeTask(item.id)}>X</button>
                        <input type="checkbox" checked={item.isDone}/>
                        <span>{item.title}</span>

                    </li>
                )
            })}
            {/*Заменили всё это через map*/}
            {/*<li>*/}
            {/*  <input type="checkbox" checked={props.task[0].isDone} />{" "}*/}
            {/*  <span>{props.task[0].title}</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <input type="checkbox" checked={props.task[1].isDone} />{" "}*/}
            {/*  <span>{props.task[1].title}</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <input type="checkbox" checked={props.task[2].isDone} />{" "}*/}
            {/*  <span>{props.task[2].title}</span>*/}
            {/*</li>*/}
        </ul>
        <div>
            <button onClick={() => filteredTasks("All")}>All</button>
            <button onClick={() => filteredTasks("Active")}>Active</button>
            <button onClick={() => filteredTasks("Completed")}>Completed</button>
        </div>
    </div>
}
