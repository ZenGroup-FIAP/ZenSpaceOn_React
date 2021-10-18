import React from 'react'
import { Link } from 'react-router-dom'
import DrSergio from '../img/pessoas/doc-3.jpg'
import DraCristina from '../img/pessoas/doc-1.jpg'
import DraJulia from '../img/pessoas/doc-4.jpg'
import { BotaoBranco, Container, TituloInterno, BgVerde, FlexBoxAgendaHome, AgendaP, CallToActionPBranco } from '../../styled.js'


export default function Agendamento() {
    return (
        <div>
            <BgVerde>
                <Container>
                    <TituloInterno>Suas próximas consultas</TituloInterno>
                    <FlexBoxAgendaHome>
                        <img src={DrSergio} alt="Dr Sergio"/>
                        <AgendaP>24 de maio de 2021.</AgendaP>
                        <AgendaP>Dr. Sergio</AgendaP>
                    </FlexBoxAgendaHome>
                    <FlexBoxAgendaHome>
                        <img src={DraCristina} alt="Dr Sergio"/>
                        <AgendaP>28 de maio de 2021.</AgendaP>
                        <AgendaP>Dra. Cristina</AgendaP>
                    </FlexBoxAgendaHome>
                    <FlexBoxAgendaHome>
                        <img src={DraJulia} alt="Dr Sergio"/>
                        <AgendaP>06 de junho de 2021.</AgendaP>
                        <AgendaP>Dra. Julia</AgendaP>
                    </FlexBoxAgendaHome>
                    <CallToActionPBranco>Acesse sua agenda para mais detalhes</CallToActionPBranco>
                    <Link to='/Perfil'><BotaoBranco>Agenda</BotaoBranco></Link>
                </Container>
            </BgVerde>
        </div>
    )
}
