import React from "react";
import './components.css'
const Label = (props) => {
    return (
    <div className="labelContainer">
        <a  style={{ backgroundColor: '#'+props.label.color }} className='labelAnchor' href={props.label.url} target="_blank" rel="noopener noreferrer">
            {props.label.name}
        </a>
    </div>
    )
};

export default Label;
