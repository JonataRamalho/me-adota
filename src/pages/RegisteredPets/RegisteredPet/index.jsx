import { Background } from "../../../components";
import { ButtonBackMenu, ContainerButtonBack, Image, Main } from "../styles";
import arrowLeft from "../../../assets/arrow-left.svg";
import { PetInfo } from "../../../features";

const RegisteredPet = () => {
  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/menu/pets">
            <Image src={arrowLeft} /> Voltar para pets
          </ButtonBackMenu>
        </ContainerButtonBack>
        <PetInfo />
      </Main>
    </Background>
  );
};

export default RegisteredPet;
