import React, { useReducer, useState } from 'react';

function App() {

  
  // 1 - Componente do contador com useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'incrementar':
        return state + 1;
      case 'diminuir':
        return state - 1;
      case 'resetar':
        return 0;
      default:
        return state;
    }
  };
  const [contador, dispatch] = useReducer(reducer, 0);






  // 2 - Componente com mudança de cor usando useState com callback
  const [cor, setCor] = useState('red');
  const alternarCor = () => {
    setCor((corAtual) => (corAtual === 'red' ? 'blue' : 'red'));
  };






  // 3 - Contador de cliques com useState na forma literal
  const [cliques, setCliques] = useState(0);
  const incrementarCliques = () => {
    setCliques((c) => c + 1);
  };







  // 4 - Entrada de texto com exibição do valor
  const [texto, setTexto] = useState('');
  const [exibirTexto, setExibirTexto] = useState('');










  // 5 - Alternância de visibilidade do texto
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: 'diminuir' })}>Diminuir</button>
        <button onClick={() => dispatch({ type: 'resetar' })}>Resetar</button>
      </div>

      <div>
        <button onClick={alternarCor} style={{ backgroundColor: cor }}>
          Clique para mudar a cor
        </button>
      </div>
      <div>
        <p>Número de cliques: {cliques}</p>
        <button onClick={incrementarCliques}>Clique aqui</button>
      </div>
      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite algo"
        />
        <button onClick={() => setExibirTexto(texto)}>Exibir Texto</button>
        <p>{exibirTexto}</p>
      </div>
      <div>
        {visivel && <p>Este é o texto que será alternado</p>}
        <button onClick={() => setVisivel(!visivel)}>Alternar Visibilidade</button>
      </div>
    </div>
  );
}

export default App;
