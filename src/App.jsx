// import { useState } from "react";


// export default ()=>{

//     const [valor, setValor]=useState(0)
//     // let valor =0;
   
//     // function aumentar(){
//     //     valor++;
//     //     console.log(valor);
//     //     document.querySelector("h1").textContent="Valor: " + valor
//     // } 
//     function aumentar(){
//         setValor(old => old+1)
//     }
//     return (
//         // <>App!</>
//         <>
//         <h1> Valor:{valor} </h1>
//         <button onClick={aumentar}> Aumentar uma unidade</button>
//         </>
//     )
// }
import React from "react";
// import HookState01 from "./components/UseState_01"
import HookState02 from "./components/UseState_02"

export default ()=>{
    return ( 
        <>
        <h1> REACT HOOKS</h1>
        {/* <HookState01/> */}
        <HookState02/> 
        </>
    )
}