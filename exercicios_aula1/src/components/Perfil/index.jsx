//props desestruturadas
function Perfil ({nome, idade, pais}) {

    return (
        <div>
        <h1>Seu Perfil</h1>
        <h2>Seu Nome e : {nome}</h2>  
        <h2>Sua Idade e: {idade}</h2>  
        <h2>Sueu Pais e : {pais}</h2>  
        </div>

    )
}
export default Perfil
