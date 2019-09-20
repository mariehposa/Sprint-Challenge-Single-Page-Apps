import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {
    return (
        <div>
            <div>
                <Link to='/'>Welcome Page</Link>
            </div>
            <div>
                <Link to='/characters'>Character List</Link>
            </div>
        </div>
    );
}