import React, {useState} from "react";

export default () => {
    const [login, setLogin]=useState(false)
    const [btnText, setBtnText]=useState('login')
 
 
    return(
        <>
        <h3> Condotional rendering - Fake Login</h3>
        <button onClick={()=>{
            setLogin(!login);
            setBtnText(login ? 'Login' : 'Logout')
        }}>{btnText} </button>
        {login && <p>Usuário logado</p>}
        </>
    )
}