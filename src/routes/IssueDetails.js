import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { issueDetails } from "../api";


const IssueDetails = props => {
    useEffect(() => {
        issueDetails(props.match.params.issueId).then(console.log);
    });
    return(
    <div>Issue details</div>
)}

export default withRouter(IssueDetails);