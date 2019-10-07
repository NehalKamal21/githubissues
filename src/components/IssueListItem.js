import React from 'react';

import {MdErrorOutline} from 'react-icons/md'

import Label from '../components/LabelComponent';
import Comment from '../components/CommentComponent';

const IssueListItem = ({ issue, navigateTo }) => (
    <div>
        <MdErrorOutline color="green"/>
        <div className='tags'>
            {issue.labels.map(label => (
                <Label label={label} key={label.id} />
            ))}
        </div>
        {issue.comments > 0 &&
            <button onClick={navigateTo.bind(this, issue)} key={issue.number}>
                <Comment count={issue.comments} url='' />
            </button>}
    </div>
)

export default IssueListItem;