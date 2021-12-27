import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import { Button } from "./components/Button";
import FullInput from "./components/FullInput";

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (Newtitle: string) => void;

};

export function Todolist(props: PropsType) {
    // const [title, setTitle] = useState("");

    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.currentTarget.value);
    // };

    // const onClickHandler = () => {
    //     props.addTask(title);
    //     setTitle("");
    // };

    // const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         onClickHandler();
    //     }
    // };

    // const changeFilterAllHandler = () => {
    //     props.changeFilter("all");
    // }
    //
    //   const changeFilterActiveHandler = () => {
    //       props.changeFilter("active");
    //   }
    //
    //   const changeFilterCompletedHandler = () => {
    //       props.changeFilter("completed");
    //   }


    // const changeFilterHandler = (valueFilter: FilterValuesType) => {
    //     props.changeFilter(valueFilter)
    // }

    const changeButtons = (valueFilter: FilterValuesType) => {
        props.changeFilter(valueFilter)
    }

    const onClickButtnonHandler = (removeId: string) => {
        props.removeTask(removeId);
    }


    return (
        <div>
            <h3>{props.title}</h3>
            {/*<div>*/}
            {/*    <input*/}
            {/*        value={title}*/}
            {/*        onChange={onChangeHandler}*/}
            {/*        onKeyPress={onKeyPressHandler}/>*/}
            {/*    <button onClick={onClickHandler}>+</button>*/}
            {/*</div>*/}

            <FullInput addTask = {props.addTask}/>

            <ul>
                {props.tasks.map((t) => (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={() => onClickButtnonHandler(t.id)}>x</button>*/}
                        <Button name = {'x'} callBack = {() => onClickButtnonHandler(t.id)} />
                    </li>
                ))}
            </ul>
            <div>

                <Button name = {'All'} callBack = {() => changeButtons('all')} />
                <Button name = {'Active'} callBack = {() => changeButtons('active')} />
                <Button name = {'Completed'} callBack = {() => changeButtons('completed')} />
                {/*<button onClick={() => changeFilterHandler('all')}>All</button>*/}
                {/*<button onClick={() => changeFilterHandler('active')}>Active</button>*/}
                {/*<button onClick={() => changeFilterHandler("completed")}>Completed</button>*/}
            </div>
        </div>
    );
}
