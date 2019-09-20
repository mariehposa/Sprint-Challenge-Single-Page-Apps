import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationStyle, StyledLink} from './CharacterStyle';

export default function Navigation () {
    return (
        <NavigationStyle>
            <div>
                <StyledLink to='/'>Welcome Page</StyledLink>
            </div>
            <div>
                <StyledLink to='/characters'>Character List</StyledLink>
            </div>
        </NavigationStyle>
    );
}