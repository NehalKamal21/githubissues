import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import Label from '../components/LabelComponent';
import Comment from '../components/CommentComponent'
import './routers.css';
// const labels = [
//     {
//         "id": 1494610677,
//         "node_id": "MDU6TGFiZWwxNDk0NjEwNjc3",
//         "url": "https://api.github.com/repos/facebook/create-react-app/labels/issue:%20bug%20report",
//         "name": "issue: bug report",
//         "color": "f49118",
//         "default": false
//     },
//     {
//         "id": 1467678098,
//         "node_id": "MDU6TGFiZWwxNDY3Njc4MDk4",
//         "url": "https://api.github.com/repos/facebook/create-react-app/labels/needs%20triage",
//         "name": "needs triage",
//         "color": "b5274d",
//         "default": false
//     }
// ]


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
