import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
    
    return(
        <>
        <button className={'btn ' + props.buttonStyle}><FontAwesomeIcon icon={props.icons} />{props.value}</button>
        </>
    )
}

export default Button;