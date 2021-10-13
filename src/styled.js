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

    button {
        display: none;
    }

    .closed {
        display: none;
    }

    .open {
        display: none;
    }

    @media only screen and (max-width: 660px) {
        flex-wrap: wrap;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding: 20px 0px 0px 0px;


        nav {
            display: none;
        }

        button {
           display: block;
           margin: 10px;
        }

        .open {
            display: block;
            width: 100%;
        }

        .open ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;
        }

        .open ul li {   
            display: flex;
            justify-content: center;
            padding: 20px 0px;
        }

        .open ul li:hover {
            width: 100%;
            background-color: #15B184;
        }


    }
`

export const ButtonHeaderStyle = styled.button`
    background-color: #17d19c;
    color: #fff;
    border: 2px solid #fff;
    font-size: 24px;
    border-radius: 7px;
` 

export const PesquisaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;

    h1 {
        font-size: 35px;
        font-weight: bold;
        color: #484b4d;
    }
`

export const FormularioPesquisa = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #busca {
        width: 40%;
        font-size: 24px;
        border: 1px solid #484b4d;
        border-radius: none;
        margin: 10px 0;
    }

    .filtros {
        color: #484b4d;
        display: flex;
        flex-direction: column;
    }

    .filtros .title-filtros {
        font-size: 24px;
    }

    .filtros label {
        font-size: 16px;
    }

    .filtros .campo {
        display: flex;
        margin: 10px 0px;
        border: 1px solid #17d19c;
        padding: 10px;
    }

    .filtros .campo select {
        width: 45%;
        margin: 0px 15px;
        border: none;
    }

    .filtros .campo #ratingId {
        margin: 0px 0px 0px 44px;
    }

    .filtros .buscar {
        display: flex;
        justify-content: center;
        margin: 40px 0px;
    } 

    .filtros .buscar button {
        color: #17d19c;
        background-color: #fff;
        border: 2px solid #17d19c;
        font-size: 18px;
        padding: 0px 15px;

    }
`