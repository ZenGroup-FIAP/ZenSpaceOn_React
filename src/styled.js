import styled from 'styled-components';

export const GlobalStyles = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`

export const HeaderStyled = styled.header`
    background-color: #17d19c;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    font-weight: bold;

    a {
        color: #fff;
    }

    ul li a:hover {
        text-decoration: underline;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin: 0 10px;
    }
`