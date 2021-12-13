import React from "react";
import "./App.css";

type propsType = {
    title?: string;
    task: Array<inArray>;
};

type inArray = {
    id: number;
    title: string;
    isDone: boolean;
};

export const Todolist = (props: propsType) => {

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.task.map(item => {

                        return (
                            <li key={item.id}>
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
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};
