import { ButtonComponents } from "../ButtonComponents"

export const ContainerText = ({Children,nome}) => {

  return (
    <div>
      <ButtonComponents nome="Botao no ContainerText"/>

      Esse é o componente ContainerText do {nome}
      {Children}
    </div>
  )
}