import React from 'react'
import { FormularioPesquisa, PesquisaStyled, ResultadoPesquisa } from '../../styled'
import DraCristina from '../img/pessoas/doc-1.jpg'

export default function Pesquisa() {
    return (
        <PesquisaStyled>
            <h1>Pesquise o melhor para você.</h1>
            <FormularioPesquisa action="#pesqusou">
                <input id="busca" type="text"/>
                <div className="filtros">
                    <h4 className="title-filtros">Filtros</h4>
                    <div className="campo">
                        <label for="rating">rating atual: </label>
                        <select name="rating" id="ratingId">
                            <option value="5">5.0</option>
                            <option value="4">4.0</option>
                            <option value="3">3.0</option>
                            <option value="2">2.0</option>
                            <option value="1">1.0</option>
                        </select>

                    </div>
                    <div className="campo">
                        <label for="disponibilidade">disponibilidade: </label>
                        <select name="disponibilidade" id="disponibilidadeId">
                            <option value="total">Total</option>
                            <option value="semanal">Durante a semana</option>
                            <option value="finalDeSemana">Finais de semana</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label for="numeroConsultas">consultas totais: </label>
                        <select name="numeroConsultas" id="numeroConsultasId">
                            <option>Acima de 200</option>
                            <option>100 consultas</option>
                        </select>
                    </div>
                    <div className="buscar">
                        <button type="submit">Buscar</button>
                    </div>
                </div>
            </FormularioPesquisa>

            <div className="resultado-title">
                <h2>Resultado da busca</h2>
            </div>
            <ResultadoPesquisa>
                <div className="imagem-perfil">
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div className="dados-psicologo">
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </ResultadoPesquisa>

            <ResultadoPesquisa>
                <div className="imagem-perfil">
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div className="dados-psicologo">
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </ResultadoPesquisa>

            <ResultadoPesquisa>
                <div className="imagem-perfil">
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div className="dados-psicologo">
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </ResultadoPesquisa>

            <ResultadoPesquisa>
                <div className="imagem-perfil">
                    <img src={DraCristina} alt="pessoa1"/>
                </div>
                <div className="dados-psicologo">
                    <h4>Dra.Cristina</h4>
                    <span>Rating: 5.0</span>
                    <span>Disponibilidade: 8:00 às 16:00</span>
                    <span>Consultas: 540</span>
                </div>
            </ResultadoPesquisa>

        </PesquisaStyled>
    )
}
