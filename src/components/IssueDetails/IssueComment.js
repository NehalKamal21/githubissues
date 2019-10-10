import React from "react";
import ReactMarkdown from 'react-markdown';


const IssueComment = (props) => (
    <div className='issue-comment border'>
        <ReactMarkdown source={props.comment} escapeHtml={false} />
    </div>
)

export default IssueComment;