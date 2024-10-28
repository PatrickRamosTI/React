
function ComponnteReutilizavel(props) {
  return(
 <div>
  <span>
    Card de pokemon {props.nome}</span>
 </div>

  )
}


function App() {
 
  return (
    <div>
      <ComponnteReutilizavel nome = "Pikachu"/>
      <ComponnteReutilizavel nome = "Raichu"/>
      <ComponnteReutilizavel nome = "Charmander"/>
      <ComponnteReutilizavel nome = "Bulbasour"/>
    </div>
    
  )
}

export default App
