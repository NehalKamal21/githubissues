import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { issueDetails, issueComments } from "../api";
import ReactMarkdown from 'react-markdown';
import Spinner from '../components/global/Spinner';
import IssueComment from '../components/IssueComment';

import './routes.css'

const IssueDetails = props => {
    const [comments, setComments] = useState(null);
    const [issue, setIssue] = useState(null);
    useEffect(() => {
        // setIssue(props.location.state.issue)
        issueDetails(props.match.params.issueId).then(res => {
            setIssue(res.data);
        });
        issueComments(props.match.params.issueId).then(res => {
            setComments(res.data);
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div className='pageContainer'>
            {
                (comments && issue) ? <div className='container'>
                    <h1 className='title'>
                        {issue.title}
                    </h1>
                    <div className='issue-body'>
                        <ReactMarkdown source={issue.body} escapeHtml={false} />
                    </div>
                    {comments.map(comment => (
                        <IssueComment key={comment.id} comment={comment.body} />
                    ))}

                </div> :
                    <Spinner />
            }
        </div>
    )
}

export default withRouter(IssueDetails);