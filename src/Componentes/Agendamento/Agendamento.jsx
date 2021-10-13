import React from 'react'
import { Link } from 'react-router-dom'
import DrSergio from '../img/pessoas/doc-3.jpg'
import DraCristina from '../img/pessoas/doc-1.jpg'
import DraJulia from '../img/pessoas/doc-4.jpg'


export default function Agendamento() {
    return (
        <div>
            <div>
                <p>Inicie sua experiência. Procure um profissional perfeito para você</p>
                <Link to="../pesquisa/pesquisa.html">Pesquisa</Link>
            </div>
            <div>
                <h2>Suas próximas consultas</h2>
            </div>
            <div>
                <img src={DrSergio} alt="Dr Sergio"/>
                <p>24 de maio de 2021.</p>
                <span>Dr. Sergio</span>
            </div>
            <div>
                <img src={DraCristina} alt="Dr Sergio"/>
                <p>28 de maio de 2021.</p>
                <span>Dra. Cristina</span>
            </div>
            <div>
                <img src={DraJulia} alt="Dr Sergio"/>
                <p>06 de junho de 2021.</p>
                <span>Dra. Julia</span>
            </div>
            <div>
                <p>Acesse sua agenda para mais detalhes</p>
                <a href="null">Agenda</a>
            </div>
        </div>
    )
}
