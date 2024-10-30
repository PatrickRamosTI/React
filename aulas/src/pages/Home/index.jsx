import { ButtonComponents } from "../../components/ButtonComponents";
import { ContainerText } from "../../components/ContainerText";
import './'

export const Home = () => {
  function entrarNaPagina() {
    alert("Essa função e para logar");
  }

  function esqueciMinhaSenha() {
    alert("Essa função e de esqueci minha senha");
  }

  function cadastrarUsuario() {
    alert("Essa função e para cadastrar");
  }

  return (
    <div>
      

      <ContainerText nome='Patrick'>
      <span>
        Ola, eu sou o filho
      </span>
      </ContainerText>

      <ButtonComponents nome="Cadastrar" funcao={cadastrarUsuario} />

      <ButtonComponents nome="Entrar" funcao={entrarNaPagina} />

      <ButtonComponents nome="Esqueci minha senha" funcao={esqueciMinhaSenha} />
    </div>
  );
};
