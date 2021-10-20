import React from 'react'
import { FlexBoxAssinatura, Container, ValorAssinaturaTitulo, ValorAssinaturaSubtitulo, ValorAssinaturaTexto, AssinaturaBg } from '../../styled.js'

export default function AssinaturaPlano() {
    return (
        <div>
            <Container>
                <FlexBoxAssinatura>
                    <div>
                        <AssinaturaBg>
                            <ValorAssinaturaTitulo>R$ 100</ValorAssinaturaTitulo>
                            <ValorAssinaturaSubtitulo>BÁSICO</ValorAssinaturaSubtitulo>
                            <ValorAssinaturaTexto>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ValorAssinaturaTexto>
                        </AssinaturaBg>
                    </div>

                    <div>
                        <AssinaturaBg>
                            <ValorAssinaturaTitulo>R$ 150</ValorAssinaturaTitulo>
                            <ValorAssinaturaSubtitulo>INTERMEDIÁRIO</ValorAssinaturaSubtitulo>
                            <ValorAssinaturaTexto>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ValorAssinaturaTexto>
                        </AssinaturaBg>
                    </div>

                    <div>
                        <AssinaturaBg>
                            <ValorAssinaturaTitulo>R$ 200</ValorAssinaturaTitulo>
                            <ValorAssinaturaSubtitulo>COMPLETO</ValorAssinaturaSubtitulo>
                            <ValorAssinaturaTexto>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ValorAssinaturaTexto>
                        </AssinaturaBg>
                    </div>
                </FlexBoxAssinatura>
            </Container>
        </div>
    )
}
