import React from "react";
import { TaskType } from "./Todolist";
import styles from './Todolist.module.css'

type propsType = {
  tasks: Array<TaskType>;
  onChangeCheckbox: (tID: string, checkedValue: boolean) => void;
  onClickHandler: (tID: string) => void;
};

export const TasksMap = (props: propsType) => {
  return (
    <ul>
      {props.tasks.map((t) => {
        return (
          <li key={t.id} className={t.isDone ? styles.isDone : ""}>
            <input
              type="checkbox"
              checked={t.isDone}
              onChange={(event) =>
                props.onChangeCheckbox(t.id, event.currentTarget.checked)
              }
            />
            <span>{t.title}</span>
            <button onClick={(event) => props.onClickHandler(t.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
