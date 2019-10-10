import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import IssueListItem from "../components/HomePage/IssueListItem";
import Pagination from '../components/HomePage/Pagination';
import Spinner from "../components/global/Spinner";



const HomePage = props => {
    const [issues, setIssues] = useState(null);
    const { history } = props;

    const navigateToComments = ({ number }) => history.push(`/${number}/issue-details`);

    
    const renderIssues = issues => issues.map(issue => (
        <IssueListItem
            key={issue.number}
            issue={issue}
            navigateTo={navigateToComments}
        />
    ))

    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data);
        });
    }, [props.match.params.page]);


    return (
        <div className="page-container">
            {issues ? (
                <>
                    {renderIssues(issues)}
                    <Pagination />
                </>
            )
                : (
                    <Spinner />
                )}
        </div>
    );
};

export default withRouter(HomePage);