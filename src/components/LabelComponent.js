import React from "react";
import './components.css'
const Label = (props) => {
    console.log(props.label.color)
    return (
        <div className="labelContainer">
            <a style={{ backgroundColor: '#' + props.label.color, color: props.label.default ? '#000' : '#fff' }} className='labelAnchor' href={props.label.url} target="_blank" rel="noopener noreferrer">
                {props.label.name}
            </a>
        </div>
    )
};

export default Label;
