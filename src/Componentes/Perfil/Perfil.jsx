import React from 'react'
import AssinaturaAtalio from '../Assinatura/AssinaturaAtalio'
import Agendamento from '../Agendamento/Agendamento.jsx'
import FotoPerfil from '../img/pessoas/foto-perfil.jpg'
import {ConteinerPerfil, ConteinerBio, ConteinerUsuario, SectionPerfil} from '../../styled.js'

export default function Perfil() {
    return (
        <SectionPerfil>
            <ConteinerPerfil>    
                <ConteinerUsuario>
                    <div className="imagem-perfil">
                        <img src={FotoPerfil} alt="foto de perfil"/>
                    </div>
                    <div className="dados-perfil">
                        <h1>Nome Exemplo</h1>
                        <p>25 anos</p>
                        <p>+55 11 9999-9999</p>
                        <p>nome.exemplo@email.com</p>
                    </div>
                </ConteinerUsuario>

                <ConteinerBio>
                    <h3>Bio</h3>
                    <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore culpa voluptates quasi ea eligendi inventore ex, ratione quis quas cumque mollitia, totam ipsa consequatur asperiores, assumenda error excepturi doloribus voluptate! consectetur adipisicing elit. Eaque molestiae eius et labore explicabo necessitatibus corrupti asperiores ipsum nobis ullam deleniti vitae aliquid nisi, obcaecati ratione? Debitis, maiores! Illum, quis?</p>
                    <a href="#">editar perfil</a>
                </ConteinerBio>
            </ConteinerPerfil>

            <Agendamento/>
            <AssinaturaAtalio />

        </SectionPerfil>
    )
}
