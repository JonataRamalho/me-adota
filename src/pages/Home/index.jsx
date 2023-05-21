import {
  Background,
  Button,
  ContainerContent,
  ContainerHeader,
  Header,
  Main,
} from "../../components";

import { Image } from "./styles";

import imgMeAdota from "../../assets/vamosadotar.png";

const Home = () => {
  return (
    <Background>
      <Main>
        <ContainerHeader>
          <Header type={0} />
        </ContainerHeader>
        <ContainerContent>
          <Image src={imgMeAdota} />
          <Button
            to="/pesquisar"
            content="Adote um agora!"
            typeButton="adopt"
          />
        </ContainerContent>
      </Main>
    </Background>
  );
};

export default Home;
