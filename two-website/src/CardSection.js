import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">We love new friends!</h2>
                <div className="row">
                <div className="col-4">
                    <Card title="Apple Inc" buttonName="Ping Apple" cardtext="This is Apple Company from USA" imgsrc="https://designlogovector.com/wp-content/uploads/2022/01/apple-logo-white-svg-300x300.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>
                <div className="col-4">
                    <Card title="Microsoft Inc" buttonName="Ping Gates" cardtext="This is Bill Company from USA" imgsrc="https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>
                <div className="col-4">
                    <Card title="Facebook Inc" buttonName="Ping Mark" cardtext="This is Mark Company from USA" imgsrc="https://pngroyale.com/wp-content/uploads/2021/11/facebook-messenger-logo.png?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection;