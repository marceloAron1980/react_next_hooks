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
// import HookState02 from "./components/UseState_02"
// import HookState03 from "./components/UseState_03"
// import HookState04 from "./components/UseState_04"
// import HookState05 from "./components/UseState_05"
// import HookState06 from "./components/UseState_06"
// import HookState07 from "./components/UseState_07"
// import HookState08 from "./components/UseState_08"
// import HookState09 from "./components/UseState_09"
// import HookState10 from "./components/UseState_10"
// import HookState11 from "./components/UseState_11"
// import HookState12 from "./components/UseState_12"
// import HookState13 from "./components/UseState_13"
// import HookState14 from "./components/UseState_14"
// import HookState15 from "./components/UseState_15"
// import HookRef16 from "./components/UseRef_16"
// import HookEffect17 from "./components/UseEffect_17"
import HookEffect18 from "./components/UseEffect_18"

export default ()=>{
    return ( 
        <>
        <h1> REACT HOOKS</h1>
        {/* <HookState01/> */}
        {/* <HookState02/> */}
        {/* <HookState03/>  */}
        {/* <HookState04/>  */}
        {/* <HookState05/>  */}
        {/* <HookState06/> */}
        {/* <HookState07/>  */}
        {/* <HookState08/>  */}
        {/* <HookState08/> */}
        {/* <HookState09/> */}
        {/* <HookState10/> */}
        {/* <HookState11/> */}
        {/* <HookState12/> */}
        {/* <HookState13/> */}
        {/* <HookState14/> */}
        {/* <HookState15/> */}
        {/* <HookRef16/> */}
         {/* USEEFFECT serve para escutar uma determinada funcionalidade 
        de acordo com algumas condições, podermos querer escutar uma determinada
        função que quer carregar dados de uma determinada API no arranque 
        do componente ou querremos por exemplo executar uma determinada operação 
        sempre que um USESTATE é alterado*/}
        {/* <HookEffect17/> */}
        <HookEffect18/>
        </>
    )
}