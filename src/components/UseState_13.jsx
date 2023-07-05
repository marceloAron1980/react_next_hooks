import React, {useState} from "react";

export default () => {
    const [text, setText]=useState("Texto inicial")

    return(
        <>
        <h3> Input Data </h3>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>{text}</p>
        <p>O Texto incerido é {text}</p>
        </>
)
}