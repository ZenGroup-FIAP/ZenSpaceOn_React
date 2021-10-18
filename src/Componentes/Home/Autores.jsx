import React from 'react'
import { Link } from 'react-router-dom'
import { Container, SubContainer, OpiniaoBlock, OpiniaoCite, CallToActionP, Botao } from '../../styled.js'

export default function Autores() {
    return (
        <div>
            <div>
                <Container>
                    <SubContainer>
                        <OpiniaoBlock>
                            "No mundo atual, a contínua expansão de nossa
                            atividade cumpre um papel essencial na formulação da
                            gestão inovadora da qual fazemos parte.
                            No mundo atual, a contínua expansão de nossa
                            atividade cumpre um papel essencial na formulação da
                            gestão inovadora da qual fazemos parte."
                        </OpiniaoBlock>
                        <OpiniaoCite>Alexandre Dinis</OpiniaoCite>
                    </SubContainer>
                    <SubContainer>
                        <CallToActionP>Inicie sua experiência. Procure um profissional perfeito para você</CallToActionP>
                        <Link to='/pesquisa'><Botao>Pesquisa</Botao></Link>
                    </SubContainer>
                </Container>
            </div> 
        </div>
    )
}
