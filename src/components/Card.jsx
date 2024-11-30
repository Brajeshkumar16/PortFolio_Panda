import React from "react";
import './Card.css';
import img from '../assets/prof.jpg';

function Card(props) {
    const imageSrc = props.img || img;

    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img className="circle-img" src={imageSrc} alt="profile" />
                {/* <img className="circle-img" src={props.img? img: img} alt="...logo" /> */}
            </div>
            <div className="bottom">
                <p className="info">{props.email || props.email2}</p>
                <p className="info">Mob.: {props.phone}</p>
            </div>
        </div>
    );
}

export default Card;
