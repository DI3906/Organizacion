import { useState } from "react"
import "./Campo.css"

const Campo =(props) =>{
    const placeholderModificardor=`${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificardor} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo