import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { issueDetails, issueComments } from "../api";
import ReactMarkdown from 'react-markdown';
import Spinner from '../components/global/Spinner';
import IssueComment from '../components/IssueDetails/IssueComment';


const IssueDetails = props => {
    const [comments, setComments] = useState(null);
    const [issue, setIssue] = useState(null);
    useEffect(() => {
        issueDetails(props.match.params.issueId).then(res => {
            setIssue(res.data);
        });
        issueComments(props.match.params.issueId).then(res => {
            setComments(res.data);
        });
    }, [props.match.params.issueId]);
    return (
        <div className='page-container'>
            {
                (comments && issue) ? <div className='issue-container'>
                    <h1 className="issue-title">
                        {issue.title}
                    </h1>
                    <div>
                        <ReactMarkdown className="border" source={issue.body} escapeHtml={false} />
                    </div>
                    {comments.map(comment => (
                        <IssueComment className="border" key={comment.id} comment={comment.body} />
                    ))}
                </div> :
                    <Spinner />
            }
        </div>
    )
}

export default withRouter(IssueDetails);