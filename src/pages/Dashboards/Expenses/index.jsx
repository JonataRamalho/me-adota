import {
  Background,
  ButtonBack,
  MainDashboard,
  Title,
} from "../../../components";
import { ChartExpensesContainer } from "../../../features";
import { ContainerTitle } from "../styles";
import { ContainerCharts } from "./styles";

const Expenses = () => {
  return (
    <Background dashboard={true}>
      <ButtonBack
        isDashboard={true}
        text="Voltar ao dashboards"
        url="/menu/dashboards"
      />
      <ContainerTitle>
        <Title content="Dashboard Despesas" />
      </ContainerTitle>
      <MainDashboard>
        <ContainerCharts>
          <ChartExpensesContainer />
        </ContainerCharts>
      </MainDashboard>
    </Background>
  );
};

export default Expenses;
