import { Background, Button, Header } from "../../components";

import { Image, Main } from "./styles";

import imgMeAdota from "../../assets/vamosadotar.png";

const Home = () => {
  return (
    <Background>
      <Header type={0} />
      <Main>
        <Image src={imgMeAdota} />
        <Button to="/pesquisar" content="Adote um agora!" typeButton="adopt" />
      </Main>
    </Background>
  );
};

export default Home;
