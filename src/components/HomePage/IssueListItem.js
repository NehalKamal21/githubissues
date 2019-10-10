import React from 'react';
import {Link} from 'react-router-dom';

import { MdErrorOutline } from 'react-icons/md'

import Label from './Label';
import Comment from './Comment';

const IssueListItem = ({ issue, navigateTo }) => {
    return (
        <div className="issue-list-item">
            <MdErrorOutline color="green" />
            <Link className="issue-list-item__title" to={`/${issue.number}/issue-details`}>
                <h2 >
                    {issue.title}
                </h2>
                </Link>
            <div className='label-container'>
                {issue.labels.map(label => (
                    <Label label={label} key={label.id} />
                ))}
            </div>
            {issue.comments > 0 &&
                <button className="issue-list-item__comment" onClick={navigateTo.bind(this, issue)} key={issue.number}>
                    <Comment count={issue.comments} />
                </button>}
                <p className="issue-list-item__details">#{issue.number} By {issue.user.login}</p>
        </div>
    )
}

export default IssueListItem;