import React from "react";

const Button = ({ onClick, text, customClass }) => {
    return <button onClick={onClick} type="button" className={customClass}>{text}</button>   
};

export default Button;