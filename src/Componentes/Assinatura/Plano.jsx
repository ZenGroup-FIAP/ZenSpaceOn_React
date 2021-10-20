import React from 'react'
import { TituloInternoPerfil, Container, AssinaturaForm, FormP, FormSelect, FormItemFlex } from '../../styled.js'

export default function Plano() {
    return (
        <div>
            <Container>
                <TituloInternoPerfil>Plano de Assinatura Atual</TituloInternoPerfil>
                <AssinaturaForm>
                    <div>
                        <FormItemFlex> 
                            <FormP for="planos">Plano Atual: </FormP>
                            <FormSelect>
                                <option value="basico">Básico</option>
                                <option value="intermediario">Intermediário</option>
                                <option value="completo">Completo</option>
                            </FormSelect>
                        </FormItemFlex>

                        <FormItemFlex>
                            <FormP for="metodo">Método: </FormP>
                            <FormSelect>
                                <option value="cartao">Cartão</option>
                                <option value="boleto">Boleto</option>
                                <input type="submit" value="Editar"/>
                            </FormSelect>
                        </FormItemFlex>
                    </div>
                </AssinaturaForm>
            </Container>
        </div>
    )
}
