import {
  Background,
  ButtonBack,
  MainDashboard,
  Title,
} from "../../../components";
import { ContainerTitle } from "../styles";
import { ContainerCharts } from "./styles";
import { ChartAdoptionContainer } from "../../../features";

const Adoption = () => {
  return (
    <Background dashboard={true}>
      <ButtonBack
        isDashboard={true}
        text="Voltar ao dashboards"
        url="/menu/dashboards"
      />
      <ContainerTitle>
        <Title content="Dashboard Adoção" />
      </ContainerTitle>
      <MainDashboard>
        <ContainerCharts>
          <ChartAdoptionContainer />
        </ContainerCharts>
      </MainDashboard>
    </Background>
  );
};

export default Adoption;
