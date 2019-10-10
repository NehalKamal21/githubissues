import React from "react";

const Label = props => {
    return (
    <div className="label">
        <a
        style={{
            backgroundColor: `#${props.label.color}`,
        }}
        className="label__anchor"
        href={props.label.url}
        target="_blank"
        rel="noopener noreferrer"
        >
        {props.label.name}
        </a>
    </div>
    );
};

export default Label;
