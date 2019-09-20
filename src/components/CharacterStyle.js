import styled from 'styled-components';

export const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 30%;
    border: .2rem solid ;
    border-radius: 2rem ;
    color: green;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover{
        border: .2rem solid white;
        border-radius: 2rem;
        color: black;
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