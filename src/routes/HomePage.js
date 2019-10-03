import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import Label from '../components/LabelComponent';
import Comment from '../components/CommentComponent'
import './routers.css';

const HomePage = props => {
    const [issues, setIssues] = useState(null)
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data);
        })
    });

    return (<div>
        <div className='labels'>
            {issues && issues.map(issue => {
                return (
                    <div>
                         <div className='tags'>
                        {issue.labels.map(label => (
                           
                                <Label label={label} key={label.id} />
                           
                        ))}
                         </div>
                        {issue.comments>0 && <Comment count={issue.comments} url={issue.comments_url} />}

                    </div>
                )
            })}


        </div>
    </div>);
};

export default withRouter(HomePage);
