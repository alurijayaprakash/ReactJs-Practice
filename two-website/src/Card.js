import React from "react";

const Card = ({title = "Untitled Card", cardtext = "This is my Untitled description", buttonName="My Button", imgsrc = "https://i0.wp.com/orstx.org/wp-content/uploads/2019/10/no-photo-available.png?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img
                src = {imgsrc}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{cardtext}</p>
                <a href="#" className="btn btn-success">{buttonName}</a>
            </div>
        </div>
    )
}

export default Card;