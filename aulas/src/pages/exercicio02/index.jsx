import { useState } from "react"

export const Exercicio02 = () =>{
    
    const [color, setColor] = useState('red')

    function alterar() {
        setColor(prevState=> prevState==='#f00'? '#000f' : '#f00')
    }

    return (
        <div style={{backgroundColor: color}}> 
            <button onClick={alterar}>alterar</button>
        </div>

    )

}