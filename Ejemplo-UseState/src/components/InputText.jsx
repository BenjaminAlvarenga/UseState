import React from 'react'

const InputText = ({label, value, onChange, type}) => {
    return(
        <>
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange}></input>
        </>
    )
}
export default InputText