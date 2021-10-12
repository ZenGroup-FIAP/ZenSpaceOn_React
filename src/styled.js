import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background-color: #17d19c;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin: 0 10px;
    }
`