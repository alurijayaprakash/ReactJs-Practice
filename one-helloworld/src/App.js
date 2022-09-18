import React from "react";
import MyButton from "./Button";
import "./style.css"

// one way of declaring func with curly braces and return

const MyApp = () => {
    return (
        <div>
        <h1 style={{ textAlign : "center "}}> Hello World ! </h1>
        <h1 style={{ textAlign : "center "}}> Happy J Squre Day </h1>
        <p style={{ textAlign : "center"}}>Date 18th Sep 2022</p>

        {/* <button className="button">Click Me</button> */}
        <MyButton title="App Store" />
        <MyButton title="Play Store" />
        <MyButton />


        </div>
        ) 
}

export default MyApp;