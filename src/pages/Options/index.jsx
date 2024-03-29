import { Background, Header } from "../../components";
import {
  Button,
  ContainerContent,
  ContainerDetail,
  ContainerOptions,
  Image,
  Main,
} from "./styles";

import cat from "../../assets/cat.svg";
import pet from "../../assets/pets.svg";
import dashboard from "../../assets/dashboard.svg";
import user from "../../assets/user.svg";

const Options = () => {
  return (
    <Background>
      <Header type={1} />
      <Main>
        <ContainerOptions>
          <ContainerContent>
            <Button to="/menu/cadastrar-pet">
              <ContainerDetail>
                <Image src={cat} />
              </ContainerDetail>
              Cadastrar pet para doação
            </Button>
          </ContainerContent>
          <ContainerContent>
            <Button to="/menu/pets">
              <ContainerDetail>
                <Image src={pet} />
              </ContainerDetail>
              Seus pets para adoção
            </Button>
          </ContainerContent>
          <ContainerContent>
            <Button to="/menu/dashboards">
              <ContainerDetail>
                <Image src={dashboard} />
              </ContainerDetail>
              Dashboards
            </Button>
          </ContainerContent>
          <ContainerContent>
            <Button to="/menu/perfil">
              <ContainerDetail>
                <Image src={user} />
              </ContainerDetail>
              Informações do perfil
            </Button>
          </ContainerContent>
        </ContainerOptions>
      </Main>
    </Background>
  );
};

export default Options;
