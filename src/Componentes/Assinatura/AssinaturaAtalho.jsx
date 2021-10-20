import React from 'react'
import { Link } from 'react-router-dom'
import { AgendaP, Botao, FlexBoxAssinaturaPerfil, Container, TituloInternoPerfil } from '../../styled.js'

export default function AssinaturaAtalho() {
    return (
        <div>
            <Container>
                <TituloInternoPerfil>Planos de Assinatura</TituloInternoPerfil>
                <FlexBoxAssinaturaPerfil>
                    <AgendaP>Atual:</AgendaP>
                    <AgendaP>Básico</AgendaP>
                </FlexBoxAssinaturaPerfil>

                <FlexBoxAssinaturaPerfil>
                    <AgendaP>Total a pagar:</AgendaP>
                    <AgendaP>R$100,00</AgendaP>
                </FlexBoxAssinaturaPerfil>

                <FlexBoxAssinaturaPerfil>
                    <AgendaP>Consultas disponíveis/mês:</AgendaP>
                    <AgendaP>2</AgendaP>
                </FlexBoxAssinaturaPerfil>

                <FlexBoxAssinaturaPerfil>
                    <AgendaP>Método:</AgendaP>
                    <AgendaP>Cartão final 4040</AgendaP>
                </FlexBoxAssinaturaPerfil>
                <Link to='/Assinatura'><Botao>Gerenciar Assinatura</Botao></Link>
            </Container>
        </div>
    )
}
