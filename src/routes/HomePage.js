import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { issuesPerPage } from "../api";

const HomePage = props => {
    useEffect(() => {
        issuesPerPage(props.match.params.page).then(console.log);
    });

    return <div>Home Page</div>;
};

export default withRouter(HomePage);
