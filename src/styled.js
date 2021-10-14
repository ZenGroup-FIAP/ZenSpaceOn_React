import styled from 'styled-components';
/*import HomeBg from '../Componentes/img/home-bg.jpg';*/

export const GlobalStyles = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`
/* Menu */

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

/* Perfil */

export const SectionPerfil = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    color: #484B4D;
`
export const ConteinerPerfil =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ConteinerUsuario =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 220px;
        height: 220px;
        text-align: center;
        align-items: center;
        
    }
    h1 {
        text-transform:capitalize;
        font-size: 48px;
        font-weight: bold;
    }

    p {
        padding-top: 20px ;
        font-size: 24px;
    }

    .dados-perfil {
        margin: 0px 40px;
    }

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        align-items: center;

        .imagem-perfil {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 0px 20px 0px;
        }

        .dados-perfil {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 24px;
        }

        img {
            width: 150px;
            height: 150px;
        }
    }
`
export const ConteinerBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    margin: 40px 0px;

    h3{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        padding-bottom: 30px;
    }

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }
    a {
        border: 3px solid #17d19c;
        padding: 10px 30px; 
        color: #17d19c;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        text-transform: uppercase;
        letter-spacing: .1em;
        border-radius: 12px;
        
        
    }

    @media only screen and (max-width: 850px) {
        
        width: 75%;
    }
`
export const SectionAgendamentoPerfil = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #17d19c;
    justify-content: center;
    align-items: center;

    .boxfilho{
        background-color: #fff;
    }

`

/* Pesquisa */

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

    @media only screen and (max-width: 850px) {
        h1 {
            font-size: 16px;
        }
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

    @media only screen and (max-width: 850px) {
        #busca {
            width: 300px;
        }
    }
`
export const ResultadoPesquisa = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #17d19c;
    margin: 10px 0px;

    .dados-psicologo h4 {
        margin: 0px 0px 40px 20px;
        color: #484b4d;
        font-weight: bold;
    }

    .dados-psicologo span {
        margin: 0px 20px;
    }

    @media only screen and (max-width: 1310px) {
        flex-direction: column;
        justify-content: center;
        width: 280px;

        .imagem-perfil {
            display: flex;
            justify-content: center;
        }

        .dados-psicologo h4 {
            margin: 10px 0px;
        }

        .dados-psicologo {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

/* Home */
export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0px;
    position: relative;
`

export const TituloHome = styled.h1`
    font-size: 48px;
    color: #FFF;
    font-weight: bold;

    @media only screen and (max-width: 660px){
        font-size: 30px
    }
`

export const SubtituloHome = styled.h3`
    font-size: 24px;
    line-height: 30px;
    color: #FFF;
    font-weight: bold;
`

export const TextoHome = styled.p`
    color: #FFF;
    font-size: 18px;
    line-height: 24px;
    padding: 80px 20px 40px 20px;

    @media only screen and (max-width: 660px){
        font-size: 16px;
        padding: 80px 40px;
    }
`

export const IntroducaoBg = styled.div`
    width: 100%;
    height: 514px;
    background: url("home-bg.jpg") no-repeat center;
    background-size: cover;
    text-align: center;
    padding-top: 60px;
`

export const Titulo = styled.h1`
    font-size: 48px;
    color: #484B4D;
    font-weight: bold;
`