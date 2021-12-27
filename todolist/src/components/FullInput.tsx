import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsType = {
    addTask: (title: string) => void
}

const FullInput = (props: PropsType) => {
    const [title, setTitle] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickHandler();
        }
    };

    const onClickHandler = () => {
        props.addTask(title);
        setTitle("");
    };

    return (
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullInput;