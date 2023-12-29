import { useState } from "react";
const Button = (props) => {
    
    return(
        <>
        <button className="btn  btn-ghost btn-sm bg-yellow-500 rounded mx-2 hover:text-white hover:bg-yellow-600">{props.value}</button>
        </>
    )
}

export default Button;