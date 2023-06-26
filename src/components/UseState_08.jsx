import React from "react";
import { useState } from "react";

export default () => {
    const tmp={
        nome: '',
	    apelido: '',
	    cidade: '',
	    email: ''
    }

    const [cliente, setCliente]=useState(tmp)
     
    return (
        <>
            <h3> Exercicio 06 </h3>
            <hr />
            <ul>
                <li>Nome:{cliente.nome}</li>
                <li>Apelido:{cliente.apelido}</li>
                <li>Cidade:{cliente.cidade}</li>
                <li>Email:{cliente.email}</li>
            </ul>
            <hr />

            <button onClick={()=>{
                const c={...cliente}
                c.nome='Cesar'
                setCliente(c)
            }}>Nome</button>
            
            <button onClick={()=>{
                 const c={...cliente}
                 c.apelido='Castañeda'
                 setCliente(c)
            }}>Apelido</button>
            
            <button onClick={()=>{
                 const c={...cliente}
                 c.cidade='Lima'
                 setCliente(c)
            }}>Cidade</button>
            
            <button onClick={()=>{
                 const c={...cliente}
                 c.email='cesar.acm1@gmail.com'
                 setCliente(c)
            }}>Email</button>

        </>
    )
}