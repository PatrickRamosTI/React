import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'

/*import Nomes from './components/Nomes'
function App() {
  return(
    <div>
    <Nomes nome="Patrick" />
    <Nomes nome="Julio" />
    <Nomes nome="Carlos" />
    <Nomes nome="Laura" />
    </div>
  )
}*/

function App() {
  return(
    <div>
    <Perfil nome="Patrick" idade="27 anos" pais="Brasil"/>
    </div>
  )
}

export default App
