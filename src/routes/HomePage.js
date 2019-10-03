import React, { useEffect } from "react";
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
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(console.log)
    });

    return (<div>
        <div className='labels'>
            {labels && labels.map(label => (
                <Label label={label} key={label.id} />
            ))}
        </div>
    </div>);
};

export default withRouter(HomePage);
