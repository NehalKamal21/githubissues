import React from 'react';
import {NavLink} from 'react-router-dom';

const pages = [1, 2, 3, 4, 5];


const Pagination = () => (
    <div className="pagination">
        {pages.map(page => {
            return (
                <NavLink
                    activeClassName="pagination__item--active"
                    to={`/${page}`}
                    className="pagination__item"
                    key={page}
                >
                    {page}
                </NavLink>
            );
        })}
    </div>
)

export default Pagination;