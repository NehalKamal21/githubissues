import React from "react";
import ReactMarkdown from 'react-markdown';


const IssueComment = (props) => (
    <div className='issueComment'>
        <ReactMarkdown source={props.comment} escapeHtml={false} />
    </div>
)

export default IssueComment;