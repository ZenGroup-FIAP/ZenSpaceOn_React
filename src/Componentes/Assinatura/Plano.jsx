import React from 'react'

export default function Plano() {
    return (
        <div>
            <h2>Plano de assinatura</h2>
            <form>
                <div>
                    <div> 
                        <label for="planos">Plano Atual: </label>
                        <select>
                            <option value="basico">Básico</option>
                            <option value="intermediario">Intermediário</option>
                            <option value="completo">Completo</option>
                        </select>
                    </div>

                    <div>
                        <label for="metodo">Método: </label>
                        <select>
                            <option value="cartao">Cartão</option>
                            <option value="boleto">Boleto</option>
                            <input type="submit" value="Editar"/>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
