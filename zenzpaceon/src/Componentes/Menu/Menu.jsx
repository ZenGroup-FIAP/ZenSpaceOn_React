import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Perfil from '../Perfil/Perfil'
import Sobre from '../Sobre/SaibaMais'
import Pesquisa from '../Pesquisa/Pesquisa'
import Agendamento from '../Agendamento/Agendamento'
import Assinatura from '../Assinatura/AssinaturaPlano'

export default function Menu() {
    return (
        <header>
            <div>
                <a href=""><img src="" alt="Logo ZenSpace ON"/></a>

                <nav>
                    <ul>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/pesquesa">Pesquisar</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/assinatura">Assinatura</Link></li>
                    </ul>
                </nav>
                <section>
                    <Switch>

                        <Route path="/">
                            <Home />
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

                    </Switch>
                    
                </section>
            </div>
        </header>
    )
}
