import React from 'react';
import {NavLink} from 'react-router-dom';

const pages = [1, 2, 3, 4, 5];


const Pagination = () => (
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
)

export default Pagination;