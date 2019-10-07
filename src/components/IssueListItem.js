import React from 'react';
import {Link} from 'react-router-dom';

import { MdErrorOutline } from 'react-icons/md'

import Label from '../components/LabelComponent';
import Comment from '../components/CommentComponent';

const IssueListItem = ({ issue, navigateTo }) => {
    return (
        <div className="list-item-container">
            <MdErrorOutline color="green" />
            <Link className="issue-title" to={`/${issue.number}/issue-details`}>
                <h2 >
                    {issue.title}
                </h2>
                </Link>
            <div className='tags'>
                {issue.labels.map(label => (
                    <Label label={label} key={label.id} />
                ))}
            </div>
            {issue.comments > 0 &&
                <button className="issue-comment" onClick={navigateTo.bind(this, issue)} key={issue.number}>
                    <Comment count={issue.comments} />
                </button>}
                <p className="issue-details">#{issue.number} By {issue.user.login}</p>
        </div>
    )
}

export default IssueListItem;