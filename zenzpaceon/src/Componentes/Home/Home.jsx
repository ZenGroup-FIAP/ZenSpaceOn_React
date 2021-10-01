import React from 'react'
import Introducao from '.Introducao.jsx'
import Autores from './Autores.jsx'
import Agendamento from '../Agendamento/Agendamento.jsx'


export default function Home() {
    return (
        <div>
            <Introducao />
            <Autores />
            <Agendamento />
        </div>
    )
}
