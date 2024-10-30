export const ButtonComponents = ({nome, funcao}) => {

  function testandoMinhaPrimeiraFuncao() {
    funcao()
  }

  return (
    <button onClick={funcao}>
      {nome}
    </button>
  )
}