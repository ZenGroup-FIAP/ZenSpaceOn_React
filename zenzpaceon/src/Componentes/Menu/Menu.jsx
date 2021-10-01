import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Perfil from '../Perfil/Perfil'
import Sobre from '../Sobre/Sobre'
import Pesquisa from '../Pesquisa/Pesquisa'
import Agendamento from '../Agendamento/Agendamento'
import Assinatura from '../Assinatura/Assinatura'

export default function Menu() {
    return (
        <header>
            <div>
                <a href=""><img src="" alt="Logo ZenSpace ON"/></a>

                <nav>
                    <ul>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Pesquisa</a></li>
                        <li><a href="">Perfil</a></li>
                        <li><a href="">Assinatura</a></li>
                    </ul>
                </nav>
                <section>
                    <Switch>

                        <Router path="/">
                            <Home />
                        </Router>

                        <Router path="/sobre">
                            <Sobre />
                        </Router>

                        <Router path="/pesquisa">
                            <Pesquisa />
                        </Router>

                        <Router path="/perfil">
                            <Perfil />
                        </Router>

                        <Router path="/assinatura">
                            <Assinatura />
                        </Router>

                    </Switch>
                    
                </section>
            </div>
        </header>
    )
}
