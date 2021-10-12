import React from 'react'
import DraCristina from '../img/pessoas/doc-1.jpg'

export default function Pesquisa() {
    return (
        <div>
            <h1>Pesquise o melhor para você.</h1>
            <input id="busca" type="text"/>

            <div>
                <h4>Filtros</h4>
                <div>
                    <label for="rating">rating atual: </label>
                    <select>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div>
                    <label for="disponibilidade">disponibilidade: </label>
                        <option value="total">Total</option>
                        <option value="semanal">Durante a semana</option>
                        <option value="finalDeSemana">Finais de semana</option>
                </div>
                <div >
                    <label for="numeroConsutas">consultas totais: </label>
                    <option>Acima de 200</option>
                    <option>100 consultas</option>
                </div>
                <input type="submit" value="Buscar"/>
            </div>

            <div>
                <h2>Resultado da busca</h2>
                <div>
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div>
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </div>

            <div>
                <div>
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div>
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </div>

            <div>
                <div>
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div>
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </div>

            <div>
                <div>
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div>
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </div>

        </div>
    )
}