import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";
import Comment from '../components/CommentComponent';
import Label from '../components/LabelComponent';
import './routers.css';

const HomePage = props => {
    const [issues, setIssues] = useState(null);
    const pages = [1, 2, 3, 4, 5];
    const [currentPage, setCurrentPage] = useState(1);
    const { history } = props;

    const NavigateToComments = (issue) => {
        if (issue) {
            history.push({
                pathname: '/' + issue.number + '/issue-details',
            });
        }

    }
    const changePage = (i) => {
        setCurrentPage(i);
        if (i) {
            history.push({
                pathname: '/' + i,

            });
        }
    }
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(res => {
            setIssues(res.data)
        })
        // eslint-disable-next-line 
    }, [currentPage]);

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
                            <button onClick={NavigateToComments.bind(this, issue)} key={issue.number}>
                                <Comment count={issue.comments} url='' />
                            </button>}

                    </div>
                )
            })}
            <div className='paginationContainer'>
                {pages.map(page => {
                    return (
                        <button className='pagination' key={page} onClick={changePage.bind(this, page)}>
                            {page}
                        </button>
                    )
                })}
            </div>
        </div>
    </div>);
};

export default withRouter(HomePage);
