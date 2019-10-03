import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import Label from '../components/LabelComponent';
import './routers.css';
const labels = [
    {
        "id": 1494610677,
        "node_id": "MDU6TGFiZWwxNDk0NjEwNjc3",
        "url": "https://api.github.com/repos/facebook/create-react-app/labels/issue:%20bug%20report",
        "name": "issue: bug report",
        "color": "f49118",
        "default": false
    },
    {
        "id": 1467678098,
        "node_id": "MDU6TGFiZWwxNDY3Njc4MDk4",
        "url": "https://api.github.com/repos/facebook/create-react-app/labels/needs%20triage",
        "name": "needs triage",
        "color": "b5274d",
        "default": false
    }
]


const HomePage = props => {
    const [issues, setIssues] = useState(null)
    const NavigateTo = (issue) => {
        const { history } = props;
        if (issue) {
            history.push({
                pathname: '/' + issue.number + '/issue-details',
                state: { issue: issue }
            });
        }

    }
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data)
        })
        // eslint-disable-next-line 
    }, []);

    return (<div>
        <div className='labels'>
            {labels && labels.map(label => (
                <Label label={label} key={label.id} />
            ))}
            {issues && issues.map(issue => {
                return (
                    <button onClick={NavigateTo.bind(this, issue)}>
                        test
                  </button>
                )
            })}
        </div>
    </div>);
};

export default withRouter(HomePage);
