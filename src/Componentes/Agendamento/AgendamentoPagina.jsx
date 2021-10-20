import React from 'react'
import { Link } from 'react-router-dom'
import DrSergio from '../img/pessoas/doc-3.jpg'
import DraCristina from '../img/pessoas/doc-1.jpg'
import DraJulia from '../img/pessoas/doc-4.jpg'
import { Botao, Container, TituloInternoAgendamento, FlexBoxAgendamento, AgendaPAgendamento, AgendaBotaoAgendamento, SubContainerAgendamento } from '../../styled.js'
import Quote from '../Quote/Quote'


export default function Agendamento() {
    return (
        <div>
                <Container>
                    <SubContainerAgendamento>
                        <TituloInternoAgendamento>Suas próximas consultas. Edite se necessitar</TituloInternoAgendamento>
                        <FlexBoxAgendamento>
                            <img src={DrSergio} alt="Dr Sergio"/>
                            <AgendaPAgendamento>24 de maio de 2021.</AgendaPAgendamento>
                            <AgendaPAgendamento>Dr. Sergio</AgendaPAgendamento>
                            <a href="#"><AgendaBotaoAgendamento>Editar</AgendaBotaoAgendamento></a>
                        </FlexBoxAgendamento>
                        <FlexBoxAgendamento>
                            <img src={DraCristina} alt="Dr Sergio"/>
                            <AgendaPAgendamento>28 de maio de 2021.</AgendaPAgendamento>
                            <AgendaPAgendamento>Dra. Cristina</AgendaPAgendamento>
                            <a href="#"><AgendaBotaoAgendamento>Editar</AgendaBotaoAgendamento></a>
                        </FlexBoxAgendamento>
                        <FlexBoxAgendamento>
                            <img src={DraJulia} alt="Dr Sergio"/>
                            <AgendaPAgendamento>06 de junho de 2021.</AgendaPAgendamento>
                            <AgendaPAgendamento>Dra. Julia</AgendaPAgendamento>
                            <a href="#"><AgendaBotaoAgendamento>Editar</AgendaBotaoAgendamento></a>
                        </FlexBoxAgendamento>
                    </SubContainerAgendamento>
                </Container>
            <Quote />
        </div>
    )
}
