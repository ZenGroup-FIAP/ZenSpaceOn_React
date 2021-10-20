import React from 'react'
import { TituloInternoPerfil, Container, AssinaturaForm, FormP } from '../../styled.js'

export default function Plano() {
    return (
        <div>
            <Container>
                <TituloInternoPerfil>Plano de Assinatura Atual</TituloInternoPerfil>
                <AssinaturaForm>
                    <div>
                        <div> 
                            <FormP for="planos">Plano Atual: </FormP>
                            <select>
                                <option value="basico">Básico</option>
                                <option value="intermediario">Intermediário</option>
                                <option value="completo">Completo</option>
                            </select>
                        </div>

                        <div>
                            <FormP for="metodo">Método: </FormP>
                            <select>
                                <option value="cartao">Cartão</option>
                                <option value="boleto">Boleto</option>
                                <input type="submit" value="Editar"/>
                            </select>
                        </div>
                    </div>
                </AssinaturaForm>
            </Container>
        </div>
    )
}
