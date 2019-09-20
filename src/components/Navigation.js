import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationStyle} from './CharacterStyle';

export default function Navigation () {
    return (
        <NavigationStyle>
            <div>
                <Link to='/'>Welcome Page</Link>
            </div>
            <div>
                <Link to='/characters'>Character List</Link>
            </div>
        </NavigationStyle>
    );
}