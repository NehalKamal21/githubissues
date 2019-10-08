import React from "react";
import { FaRegCommentAlt } from 'react-icons/fa';

const Comment = (props) => {
    return (
        <div className="comment" style={{ width: '50px', height: '50px' }}>
            <a className='comment__anchor' href={props.url} target="_blank" rel="noopener noreferrer">
                <FaRegCommentAlt /> <span>{props.count}</span>
            </a>

        </div>
    )
};

export default Comment;
