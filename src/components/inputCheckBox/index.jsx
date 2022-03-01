import React from "react";

const InputCheckbox = (value, setValue, style, label) => {

    return (
        <>
        <input type="checkbox" value={value} name={value} onChange={() => setValue()} style={style} />
        <label htmlFor={value}>{label}</label>
        </>
        )
    } 
export default InputCheckbox;