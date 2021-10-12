import {React, useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Perfil from '../Perfil/Perfil'
import Sobre from '../Sobre/SaibaMais'
import Pesquisa from '../Pesquisa/Pesquisa'
import Agendamento from '../Agendamento/Agendamento'
import Assinatura from '../Assinatura/AssinaturaPlano'
import Logo from '../img/zenspace-logo.png'
import { ButtonHeaderStyle, HeaderStyled } from '../../styled.js'

export default function Menu() {
    const [toggle, setToggle] = useState("off")
    const [menuResponsive, setMenuResponsive] = useState("closed")

    const switchToggle = () => {
        if (toggle == "off") {
            setToggle("on")
            setMenuResponsive("open")
        } else {
            setToggle("off")
            setMenuResponsive("closed")
        }
    }


    return (
        <>
        <HeaderStyled>
                <Link to="/home"><img src={Logo} alt="Logo ZenSpace ON"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/pesquesa">Pesquisar</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/assinatura">Assinatura</Link></li>
                    </ul>
                </nav>
                <ButtonHeaderStyle className={toggle} onClick={() => switchToggle()}>Menu</ButtonHeaderStyle>
                <nav className={menuResponsive}>
                    <ul>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/pesquesa">Pesquisar</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/assinatura">Assinatura</Link></li>
                    </ul>
                </nav>
        </HeaderStyled>
                <section>
                    <Switch>

                        

                        <Route path="/sobre">
                            <Sobre />
                        </Route>

                        <Route path="/pesquisa">
                            <Pesquisa />
                        </Route>

                        <Route path="/perfil">
                            <Perfil />
                        </Route>

                        <Route path="/assinatura">
                            <Assinatura />
                        </Route>
                        
                        <Route path="/">
                            <Home />
                        </Route>

                    </Switch>
                    
                </section>
            </>
    )
}
