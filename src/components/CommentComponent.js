import React from "react";
import './components.css'
import { FaRegCommentAlt } from 'react-icons/fa';

const Comment = (props) => {
    return (
        <div className="commentContainer" style={{ width: '50px', height: '50px' }}>
            <a className='commentAnchor' href={props.url} target="_blank" rel="noopener noreferrer">
                <FaRegCommentAlt /> <span>{props.count}</span>
            </a>

        </div>
    )
};

export default Comment;
