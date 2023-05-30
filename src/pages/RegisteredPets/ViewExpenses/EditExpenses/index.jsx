import arrowLeft from "../../../../assets/arrow-left.svg";
import { useParams } from "react-router-dom";
import { Background } from "../../../../components";
import { ButtonBackMenu, ContainerButtonBack, Image, Main } from "../../styles";
import { EditPetExpenses } from "../../../../features";

const EditExpenses = () => {
  const { idPet } = useParams();

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to={`/menu/pets/${idPet}/visualizar-despesas`}>
            <Image src={arrowLeft} /> Voltar para visualizar despesas
          </ButtonBackMenu>
        </ContainerButtonBack>
        <EditPetExpenses />
      </Main>
    </Background>
  );
};

export default EditExpenses;
