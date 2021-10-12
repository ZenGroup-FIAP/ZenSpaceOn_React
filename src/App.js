import React from 'react'
import Menu from './Componentes/Menu/Menu'
import Rodape from './Componentes/Rodape/Rodape'
import { GlobalStyles } from './styled'

export default function App() {
  return (
    <GlobalStyles>
      <Menu/>
      <Rodape/>
    </GlobalStyles>
  )
}

