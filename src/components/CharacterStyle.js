import styled from 'styled-components';
import { Link } from "react-router-dom"

export const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 30%;
    border: .2rem solid ;
    border-radius: 2rem ;
    color: blue;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover{
        border: .2rem solid green;
        border-radius: 2rem;
        color: black;
    }

   img{
       border-radius: 5rem;
   }

    h3{
        color: black;
        font-family: 'Pacifico', cursive;
        font-size: 1.5rem;

        &:hover{
            color: green;
            font-size: 1.6rem;
        }
    }
`

export const NavigationStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: navy blue;
    font-family: helvetica;
    margin-left: 2rem;
`