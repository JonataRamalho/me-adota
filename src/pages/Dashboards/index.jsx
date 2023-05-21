import { useNavigate } from "react-router-dom";
import {
  Background,
  ButtonBack,
  MainWithContent,
  Title,
} from "../../components";
import { ButtonCustom, ContainerButton, ContainerTitle } from "./styles";

const Dashboards = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <ButtonBack text="Voltar ao menu" url="/menu" />
      <MainWithContent>
        <ContainerTitle>
          <Title content="Dashboards" />
        </ContainerTitle>
        <ContainerButton>
          <ButtonCustom
            variant="contained"
            onClick={() => navigate("/menu/dashboards/adocao")}
          >
            Dados adoções
          </ButtonCustom>
          <ButtonCustom
            variant="contained"
            onClick={() => navigate("/menu/dashboards/despesas")}
          >
            Dados despesas
          </ButtonCustom>
        </ContainerButton>
      </MainWithContent>
    </Background>
  );
};

export default Dashboards;
