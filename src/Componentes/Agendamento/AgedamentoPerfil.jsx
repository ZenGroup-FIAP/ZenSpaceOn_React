import React from 'react'
import doc3 from '../img/pessoas/doc-3.jpg'
import doc1 from '../img/pessoas/doc-1.jpg'
import doc4 from '../img/pessoas/doc-4.jpg'
import { SectionAgendamentoPerfil } from '../../styled'

export default function AgendamentoPerfil() {
    return (

            <SectionAgendamentoPerfil>
                <h2 className="titulo">Agenda</h2>
                <div className="box_pai">
                    <div className="box_filho">
                        <h3 className="sub_titulo">Maio</h3>
                        <div className="box">
                            <img src={doc3} alt="Dr Sergio"/>
                            <p>24 de maio de 2021. 16:00h</p>
                            <span>Dr. Sergio</span>
                            <a  href="null" className="botao">editar</a>
                        </div> 
                    </div>

                    <div className="box_filho">
                        <div className="box">
                            <img src={doc1} alt="Dr Sergio"/>
                            <p>28 de maio de 2021. 16:00h</p>
                            <span>Dra. Cristina</span>
                            <a  href="null" className="botao">editar</a>
                        </div>
                    </div>

                    <div className="box_filho">
                        <h3 className="sub_titulo">Junho</h3>
                        <div className="box">
                            <img src={doc4} alt="Dr Sergio"/>
                            <p>06 de junho de 2021. 16:00h</p>
                            <span>Dra. Julia</span>
                            <a  href="null" className="botao">editar</a>                   
                        </div>           
                    </div>

                    <div className="box_filho">
                        <p>Acesse sua agenda para mais detalhes</p>
                        <a href="null" className="btn-branco">Agenda</a>
                    </div>
                </div>
            </SectionAgendamentoPerfil>
    )
}
