import React from "react";
import "./style.css"
// another way of declaring func without curly braces and return
const MyButton = ({title = "Nothing"}) => (
    <div>
    <button className="button">{title}</button>
    </div>
)

export default MyButton;