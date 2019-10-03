import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import Label from '../components/LabelComponent';
import Comment from '../components/CommentComponent'
import './routers.css';

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
            {issues && issues.map(issue => {
                return (
                    <div key={issue.number}>
                        <div className='tags'>
                            {issue.labels.map(label => (

                                <Label label={label} key={label.id} />

                            ))}
                        </div>
                        {issue.comments > 0 &&
                            <button onClick={NavigateTo.bind(this, issue)} key={issue.number}>
                                <Comment  count={issue.comments} url='' />
                            </button>}

                    </div>
                )
            })}


        </div>
    </div>);
};

export default withRouter(HomePage);
