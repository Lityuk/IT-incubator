import React from "react";

export function Rating() {
    console.log("rating rendering")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}

function Star(props: any) {
    console.log("star rendering")
    return (
        <span>star </span>
    )
}