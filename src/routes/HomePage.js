import React, { useEffect, useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { issuesPerPage } from "../api";
import IssueListItem from "../components/IssueListItem";
import Spinner from "../components/Spinner";
import "./routes.css";

const HomePage = props => {
    const [issues, setIssues] = useState(null);
    const pages = [1, 2, 3, 4, 5];
    const { history } = props;

    const navigateToComments = issue => {
        if (issue) {
            history.push({
                pathname: "/" + issue.number + "/issue-details"
            });
        }
    };
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data);
        });
    }, [props.match.params.page]);


    return (
        <>
            <div className="home-page">
                {issues ? (
                    issues.map(issue => (
                        <IssueListItem
                            key={issue.number}
                            issue={issue}
                            navigateTo={navigateToComments}
                        />
                    ))
                ) : (
                        <Spinner />
                    )}
      </div>
            <div className="paginationContainer">
                {pages.map(page => {
                    return (
                        <NavLink
                            activeClassName="active"
                            to={`/${page}`}
                            className="pagination"
                            key={page}
                        >
                            {page}
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
};

export default withRouter(HomePage);
