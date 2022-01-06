import React, {useState} from 'react';
import s from "./OnOff.module.css"


// type ActiveType = {
//     active: boolean
// }

export const OnOff = () => {

    let [active, setActive] = useState(false)


    return (
        <div>
            <button onClick={()=>setActive(true)} className={active ? s.green : ""}>ON</button>
            <button onClick={()=>setActive(false)} className={active ? "" : s.red}>Off</button>
            <div className={`${s.round} ${active ? s.green : s.red}`}></div>

            <div>

            </div>

        </div>


    );
};
