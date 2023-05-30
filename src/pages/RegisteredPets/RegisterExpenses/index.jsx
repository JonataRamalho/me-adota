import { Background } from "../../../components";
import { ButtonBackMenu, ContainerButtonBack, Image, Main } from "../styles";
import arrowLeft from "../../../assets/arrow-left.svg";
import { useParams } from "react-router-dom";
import { RegisterPetExpenses } from "../../../features";

const RegisterExpenses = () => {
  const { idPet } = useParams();

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to={`/menu/pets/${idPet}`}>
            <Image src={arrowLeft} /> Voltar para o pet
          </ButtonBackMenu>
        </ContainerButtonBack>
        <RegisterPetExpenses />
      </Main>
    </Background>
  );
};

export default RegisterExpenses;
