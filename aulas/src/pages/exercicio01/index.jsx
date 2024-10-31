// 1 - Criar um componente que utiliza useReducer 
// para gerenciar o estado de um contador, o componente 
// deve ter botões para aumentar, diminuir e um pra resetar 
// o contador.

import { useReducer } from "react"

export const Exercicio01 = () => {
    const estadoInicial = { count: 0 }
   
    function usandoReducer(state, action) {

        switch(action.type) {
            case 'Aumentar':
                return { count: state.count + 1 }
            case 'Diminuir':
                return { count: state.count - 1 }
            case 'Resetar':
                return estadoInicial
            default:
                throw new Error("Ação desconhecida")
        }
    }

    const [state, dispatch] = useReducer(usandoReducer, estadoInicial);
      
    return (
        <div>
            <p>Contagem: {state.count}</p>
            <button onClick={() => dispatch({ type: 'Aumentar' })}>Aumentar</button>
            <button onClick={() => dispatch({ type: 'Diminuir' })}>Diminuir</button>
            <button onClick={() => dispatch({ type: 'Resetar' })}>Resetar</button>
        </div>
    )
}