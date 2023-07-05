import React, {useState} from "react";
import './UseState_11.css';
export default () => {
    const [state, setState]=useState(true);
    const class1="classUm";
    const class2="classDois";
    return(
        <>
        <h3> Conditional rendering - Change CSS Clase</h3>
        <button onClick={()=> setState(!state)}>Aterar parágrafo</button>
        <p className={`paragrafo ${state ? class1 : class2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente repudiandae labore tempora quia placeat in quis atque enim laborum nobis, consectetur aliquid facere adipisci laudantium harum ipsum corrupti voluptas.</p>
        </>
    )
}