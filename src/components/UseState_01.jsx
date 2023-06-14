import { useState } from "react";

export default () => {

    const [Valor, setValor] = useState(0);

    function diminuir () {
        setValor(v=>v-1)
    }

    function aumentar () {
        setValor(v=>v+1)
    }

    return (
        <>
            <h4> useState</h4>
            <p>Valor:{Valor}</p>
            <button onClick={diminuir}>Dominuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}