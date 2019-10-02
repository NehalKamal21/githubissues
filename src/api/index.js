import axios from "axios";

export const issuesPerPage = (page = 1) =>
    axios.get(
    `https://api.github.com/repos/facebook/create-react-app/issues?per_page=5&page=${page}`
    );

export const issueDetails = issueId =>
    axios.get(
    `https://api.github.com/repos/facebook/create-react-app/issues/${issueId}`
    );

