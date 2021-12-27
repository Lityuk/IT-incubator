import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type propsType = {
    setTitle: (title: string) => void;
    title:string
    addTask: (title:string)=>void
}


const Input = ({addTask, title, ...props}:propsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTask(title)
            props.setTitle("")
        }
    };

    return (

            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}/>

    );
};

export default Input;