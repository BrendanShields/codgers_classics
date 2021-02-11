import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/users">Search</Link>
                </li>
            </ul>
        </nav>
    )
}
