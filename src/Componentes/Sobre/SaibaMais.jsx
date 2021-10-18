import React from 'react'
import Logo from '../img/zenspace-logo-2.png'
import { Container, TituloInternoPreto, SobreTexto, FlexboxSaibaMais, FlexSaibaMais, SubtituloSaibaMais } from '../../styled.js'

export default function SaibaMais() {
    return (
        <div>
            <Container>
                <FlexboxSaibaMais>
                <FlexSaibaMais>
                    <TituloInternoPreto>Saiba um pouco mais sobre nós.</TituloInternoPreto>
                    <SubtituloSaibaMais>História, Missão e Visão</SubtituloSaibaMais>
                    <SobreTexto>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus provident commodi autem id repellat et, totam quaerat voluptatum a deleniti voluptates fugiat neque voluptatibus sint soluta. Ipsam repudiandae mollitia rerum.</SobreTexto>
                    <SobreTexto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque distinctio delectus labore vitae vero ullam ducimus in tempora. Excepturi quaerat iusto tempore voluptatibus. Pariatur soluta veniam delectus eum voluptatibus.</SobreTexto>
                </FlexSaibaMais>
                <img src={Logo} alt="logo-2"/>
                </FlexboxSaibaMais>
            </Container>
        </div>
    )
}
