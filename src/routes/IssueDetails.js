import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { issueDetails } from "../api";
import ReactMarkdown from 'react-markdown';
import './routers.css'
const IssueDetails = props => {
    const [details, setDetails] = useState(null);
    const [issue, setIssue] = useState(null);
    useEffect(() => {
        setIssue(props.location.state.issue)
        issueDetails(props.match.params.issueId).then(res => {
            setDetails(res.data);
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            {
                details && <div className='container'>
                    <h1 className='title'>
                        {issue.title}
                    </h1>
                    <div className='issue-body'>
                        <ReactMarkdown source={issue.body} escapeHtml={false} />
                    </div>
                    <div></div>
                </div>
            }
        </div>
    )
}

export default withRouter(IssueDetails);