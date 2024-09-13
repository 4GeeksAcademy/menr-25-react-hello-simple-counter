import React from "react";

const Button = ({ onClick, text }) => {
    return <button onClick={onClick} type="button" className="btn btn-dark">{text}</button>   
};

export default Button;