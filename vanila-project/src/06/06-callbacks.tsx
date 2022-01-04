import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {
    const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
       // alert("user was deleted");
    };


    const onNameChanged =()=> {
        console.log('name changed')
    }

    const changeAge =(e:ChangeEvent<HTMLInputElement>)=> {
        console.log(`My new age is ${e.currentTarget.value}`)
    }

    const focusLostHandler = ()=> {
        console.log('focus lost ')
    }


    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}> Vova</textarea>

            <input type={"number"} onChange={changeAge}/>

            <div>
                <button name="delete" onClick={deleteUser}>delete</button>
                <button name ="save" onClick={deleteUser}>x</button>
            </div>
        </div>
    );
};