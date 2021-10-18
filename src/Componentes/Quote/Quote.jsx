import React from 'react'
import { QuebraBg, QuoteBlock, QuoteCite } from '../../styled.js'

export default function Quote() {
    return (
        <div>
            <QuebraBg>
                <QuoteBlock>
                    "A felicidade se espalha. Quando nós escolhemos a felicidade, fica mais fácil para os outros também escolhê-la."   
                </QuoteBlock>
                <QuoteCite>Shawn Achor</QuoteCite>
            </QuebraBg>
        </div>
    )
}
