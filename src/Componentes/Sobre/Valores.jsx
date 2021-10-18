import React from 'react'
import { Container, BgVerde, TituloInterno, FlexValores, FlexItemValores, SubtituloValores, SobreTextoBranco } from '../../styled.js'

export default function Valores() {
    return (
        <div>
            <BgVerde>
                <Container>
                    <TituloInterno>Valores Zen Space ON</TituloInterno>
                    <FlexValores>
                        <FlexItemValores>
                            <SubtituloValores>QUALIDADE</SubtituloValores>
                            <SobreTextoBranco>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque possimus voluptates doloremque itaque perferendis ea, at cupiditate, voluptatum mollitia maxime ipsam est harum similique hic, quisquam ab ullam? Eum?</SobreTextoBranco>
                        </FlexItemValores>
                        <FlexItemValores>
                            <SubtituloValores>ACESSIBILIDADE</SubtituloValores>
                            <SobreTextoBranco>Lorem ipsum dolor sit ame dicta natus suscipit mollitia dolore quasi eaque fuga debitis. Nihil fugit dolorum sed quasi atque. Maxime maiores fugiat optio placeat voluptas!</SobreTextoBranco>
                        </FlexItemValores>
                        <FlexItemValores>
                            <SubtituloValores>MELHORIA</SubtituloValores>
                            <SobreTextoBranco>Lorem ipsum dolor sit amet, ut quos recusandae obcaecati alias aliquam tempora dolore, tenetur quam aspernatur deserunt molestias quo nobis? Soluta temporibus modi facere delectus.</SobreTextoBranco>
                        </FlexItemValores>
                    </FlexValores>
                </Container>
            </BgVerde>
            
        </div>
    )
}
