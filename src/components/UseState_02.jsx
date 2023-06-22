import { useState } from "react";

export default () => {

    const [Valor, setValor] = useState(0);

    function diminuir () {
        setValor(v=>v-1)
    }

    function aumentar () {
        setValor(v=>v+1)
    }
    function diminuir_valor(a){
        setValor(v=>v-a)
    }

    return (
        <>
            <h4> useState</h4>
            <p>Valor:{Valor}</p>
            {/* Second Buton */}
            {/* arrow function with function pass value*/}
            {/* ()=>function(value)*/}
            <button onClick={() => diminuir_valor(10)}>Diminuir</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}