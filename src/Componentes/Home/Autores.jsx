import React from 'react'
import { Container, SubContainer, OpiniaoBlock, OpiniaoCite } from '../../styled.js'

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
                </Container>
            </div> 
        </div>
    )
}
