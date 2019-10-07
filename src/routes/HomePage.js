import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import IssueListItem from "../components/IssueListItem";
import Spinner from "../components/Spinner";
import "./routers.css";

const HomePage = props => {
    const [issues, setIssues] = useState(null);
    const pages = [1, 2, 3, 4, 5];
    const [currentPage, setCurrentPage] = useState(1);
    const { history, location } = props;

    const navigateToComments = issue => {
        if (issue) {
            history.push({
                pathname: "/" + issue.number + "/issue-details"
            });
        }
    };
    const changePage = i => {
        setCurrentPage(i);
        if (i) {
            history.push({
                pathname: "/" + i
            });
        }
    };
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data);
        });
        // eslint-disable-next-line
    }, [currentPage]);

    const isActive = page => location.pathname.includes(page);

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
                        <button
                            className={`${isActive(page) ? 'active' : ''} pagination`}
                            key={page}
                            onClick={changePage.bind(this, page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default withRouter(HomePage);
