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

    @media only screen and (max-width: 580px) {
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

export const SectionPerfil = styled.section`
    margin-top: 92px;
    color: #484B4D;
    
}

`
export const ConteinerPerfil =styled.div`
    header: 636px;
    width: 699px;
    padding: 60px 500px;
    
`
export const ConteinerUsuario =styled.div`
    display: flex;
    flex-direction: row;

    div{
        padding-left:100px;
    }

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
`
export const ConteinerBio = styled.div`
    padding: 0px;
    margin-top: 40px;

    h3{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        padding-bottom: 30px;
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
`


