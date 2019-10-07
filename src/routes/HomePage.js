import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import IssueListItem from '../components/IssueListItem';
import Spinner from '../components/Spinner';
import './routers.css';

const HomePage = props => {
    const [issues, setIssues] = useState(null)
    const navigateTo = (issue) => {
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

    return (<div className="home-page">
        
            {issues ? issues.map(issue => <IssueListItem key={issue.number} issue={issue} navigateTo={navigateTo} />)
                :
                <Spinner />
            }

    </div>);
};

export default withRouter(HomePage);
