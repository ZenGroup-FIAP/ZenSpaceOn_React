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
export const SubContainer = styled.div`
    text-align: center;
    margin-bottom: 60px;
`

export const OpiniaoBlock = styled.p`
    margin: 40px 0 20px 0;
    font-size: 18px;
    line-height: 24px;
    padding: 0 250px;
    font-style: italic;

    @media only screen and (max-width: 920px) {
        padding: 0 200px;
    }

    @media only screen and (max-width: 735px) {
        padding: 0 100px;
    }
`

export const OpiniaoCite = styled.cite`
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    font-style: normal;
`

export const Botao = styled.div`
    width: 120px;
    text-align: center;
    border: 3px solid #17d19c;
    padding: 10px 30px; 
    color: #17d19c;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: .1em;
    border-radius: 12px;
    margin: 20px auto 40px auto;
`

export const BotaoBranco = styled.div`
    width: 120px;
    text-align: center;
    border: 3px solid #FFF;
    padding: 10px 30px; 
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: .1em;
    border-radius: 12px;
    margin: 20px auto 40px auto;
`

export const CallToActionP = styled.p`
    color: #484B4D;
    font-size: 18px;
    line-height: 24px;

    @media only screen and (max-width: 660px){
        font-size: 16px;
        padding: 60px 40px 0px 40px;
    }
`

export const CallToActionPBranco = styled.p`
    color: #FFF;
    font-size: 18px;
    line-height: 24px;
    text-align: center;

    @media only screen and (max-width: 660px){
        font-size: 16px;
        padding: 60px 40px 0px 40px;
    }
`

export const TituloInterno = styled.h3`
    font-size: 24px;
    line-height: 30px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
`

export const BgVerde = styled.div`
    background-color: #17d19c;
    width: 100%;
    padding: 60px 0px;
`

export const FlexBoxAgendaHome = styled.div`
    background-color: #FFF;
    display: flex;
    text-align: center;
    max-width: 900px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 0px 20px 20px 20px;
    border-radius: 20px;

    img {
        border-radius: 100%;
        border: solid #17d19c 3px;
    }
`

export const AgendaP = styled.p`
    color: #484B4D;
    font-size: 18px;
    line-height: 24px;
`

/* Quebra */

export const QuebraBg = styled.div`
    width: 100%;
    height: 195px;
    background: url("quebra-bg.jpg") no-repeat center;
    background-size: cover;
    text-align: center;
    padding-top: 60px;

    @media only screen and (max-width: 920px) {
        padding-top: 40px;
    }

    @media only screen and (max-width: 735px) {
        padding-top: 20px;
    }

    @media only screen and (max-width: 450px){
        padding-top: 0px;
    }
`

export const QuoteBlock = styled.p`
    color: #FFF;
    margin: 40px 0 20px 0;
    font-size: 18px;
    line-height: 24px;
    padding: 0 250px;
    font-style: italic;

    @media only screen and (max-width: 920px) {
        padding: 0 200px;
    }

    @media only screen and (max-width: 735px) {
        padding: 0 100px;
    }

    @media only screen and (max-width: 450px){
        font-size: 16px;
        padding: 0px 20px 0px 20px;
    }
`

export const QuoteCite = styled.cite`
    color: #FFF;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    font-style: normal;
`

/* Footer */

export const FooterText = styled.small`
    color: #FFF;
    font-size: 14px;
    line-height: 25px;
`

export const BgFooter = styled.div`
    background-color: #17d19c;
    width: 100%;
    padding: 10px 0;
    text-align: center;
`

/* Sobre */

export const TituloInternoPreto = styled.h3`
    font-size: 24px;
    line-height: 30px;
    color: #484848;
    font-weight: bold;
    margin-bottom: 30px;
`

export const FlexboxSaibaMais = styled.div`
    margin: 60px auto;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 500px;
    }

    @media only screen and (max-width: 830px){
        flex-direction: column;
        align-items: center;
    }
        
`

export const FlexSaibaMais = styled.div`
    max-width: 400px;
`

export const SubtituloSaibaMais = styled.p`
    color: #484B4D;
    font-size: 24px;
    line-height: 30px;
    margin: 0 auto 20px auto;
`

export const FlexValores = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 830px){
        flex-direction: column;
        align-items: center;
    }
`

export const FlexItemValores = styled.div`
    max-width: 300px;
    margin: 20px;
`

export const SubtituloValores = styled.h3`
    color: #FFF;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
`

export const SobreTexto = styled.p`
    color: #484B4D;
    font-size: 18px;
    line-height: 24px;

    @media only screen and (max-width: 660px){
        font-size: 16px;
        padding: 0px;
    }
`

export const SobreTextoBranco = styled.p`
    color: #FFF;
    font-size: 18px;
    line-height: 24px;
    font-style: italic;

    @media only screen and (max-width: 660px){
        font-size: 16px;
        padding: 0px;
    }
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .box{
        color: #707070; 
        background-color: #fff;

    }

`

export const FlexBoxAssinaturaPerfil = styled.div`
    display: flex;
    margin: 20px auto;
    padding: 10px 20px;
    border: solid #17d19c 2px;
    border-radius: 20px;
    text-align: center;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;


    @media only screen and (max-width: 550px) {
        max-width: 450px;
        margin: 20px 20px;
    }
`

export const TituloInternoPerfil = styled.h3`
    font-size: 24px;
    line-height: 30px;
    color: #484848;
    font-weight: bold;
    margin: 60px 0 30px 0;
    text-align: center;
`

/* Assinatura */

export const FlexBoxAssinatura = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 960px;

    @media only screen and (max-width: 950px){
        flex-direction: column;
        align-items: center;
    }
`

export const ValorAssinaturaTitulo = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #FFF;
    line-height: 45px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
`

export const ValorAssinaturaSubtitulo = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
`

export const ValorAssinaturaTexto = styled.p`
    font-size: 14px;
    font-weight: normal;
    color: #FFF;
    line-height: 20px;
    text-align: center;
`

export const AssinaturaBg = styled.div`
    max-width: 300px;
    height: 200px;
    background-color: #17d19c;
    margin-top: 60px;
    padding: 60px 0 0 0;
    border-radius: 40px;
`

export const AssinaturaForm = styled.form`
    margin: 60px 0;
    text-align: center;
    display: flex;
    justify-content: center;

`

export const FormItemFlex = styled.div`
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`

export const FormP = styled.label`
    color: #484B4D;
    font-size: 18px;
    line-height: 24px;
`

export const FormSelect = styled.select`
    width: 200px;
    padding: 5px 0;
    text-align: center;
    margin-left: 80px;
    border: solid #17d19c 2px;
    border-radius: 20px;
    -moz-appearance: none;
`

/*Agendamento#17d19c*/

export const TituloInternoAgendamento = styled.h3`
    font-size: 24px;
    line-height: 30px;
    color: #484848;
    font-weight: bold;
    text-align: center;
    margin: 60px 0 40px 0;
`

export const FlexBoxAgendamento = styled.div`
    background-color: #17d19c;
    display: flex;
    text-align: center;
    max-width: 900px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 0px 20px 20px 20px;
    border-radius: 20px;

    img {
        border-radius: 100%;
        border: solid #FFF 3px;
    }
`

export const AgendaPAgendamento = styled.p`
    color: #FFF;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
`

export const AgendaBotaoAgendamento = styled.p`
    color: #FFF;
    padding: 5px 10px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    border: solid 2px #FFF;
    border-radius: 15px;
`

export const SubContainerAgendamento = styled.div`
    text-align: center;
    margin-bottom: 95px;
`