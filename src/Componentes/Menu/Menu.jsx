import {React, useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Perfil from '../Perfil/Perfil'
import Sobre from '../Sobre/Sobre'
import Pesquisa from '../Pesquisa/Pesquisa'
import Agendamento from '../Agendamento/AgendamentoPagina'
import Assinatura from '../Assinatura/Assinatura'
import Logo from '../img/zenspace-logo.png'
import { ButtonHeaderStyle, HeaderStyled } from '../../styled.js'

export default function Menu() {
    const [toggle, setToggle] = useState("off")
    const [menuResponsive, setMenuResponsive] = useState("closed")

    const switchToggle = () => {
        if (toggle === "off") {
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
                        <li><Link to="/pesquisa">Pesquisar</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/assinatura">Assinatura</Link></li>
                        <li><Link to="/agendamento">Agendamento</Link></li>
                    </ul>
                </nav>
                <ButtonHeaderStyle className={toggle} onClick={() => switchToggle()}>Menu</ButtonHeaderStyle>
                <nav className={menuResponsive}>
                    <ul>
                        <li><Link to="/sobre" onClick={() => switchToggle()}>Sobre</Link></li>
                        <li><Link to="/pesquisa" onClick={() => switchToggle()}>Pesquisar</Link></li>
                        <li><Link to="/perfil" onClick={() => switchToggle()}>Perfil</Link></li>
                        <li><Link to="/assinatura" onClick={() => switchToggle()}>Assinatura</Link></li>
                        <li><Link to="/agendamento" onClick={() => switchToggle()}>Agendamento</Link></li>
                    </ul>
                </nav>
        </HeaderStyled>
                <section>
                    <Switch>

                        <Route path="/agendamento">
                            <Agendamento />
                        </Route>

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
