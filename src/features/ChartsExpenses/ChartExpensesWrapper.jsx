import { useContext } from "react";
import {
  ChartAreaLine,
  ChartBar,
  ChartBarHorizontal,
  ChartPie,
  ContainerDashboard,
  SearchTotal,
} from "../../components";
import { ChartsExpensesContext } from "./ChartsExpensesProvider";

const ChartExpensesWrapper = () => {
  const {
    catExpenseCount,
    dogExpenseCount,
    nameExpenses,
    sortMostFrequentExpenses,
    totalExpensesByAnimal,
    totalExpenses,
    sortTopExpenses,
    labelDate,
    dataExpenses,
  } = useContext(ChartsExpensesContext);

  return (
    <>
      <ContainerDashboard>
        <ChartBar
          text={"Quantidade de despesas por animal"}
          labels={["Despesas"]}
          cats={[catExpenseCount]}
          dogs={[dogExpenseCount]}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartPie
          text={"Despesas que possui mais ocorrências"}
          labels={nameExpenses}
          dataAnimals={sortMostFrequentExpenses}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartAreaLine
          text={"Despesas ao decorrer dos meses"}
          labels={labelDate}
          info={dataExpenses}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartBar
          text={"Total de despesas por animal em R$"}
          labels={["Despesas"]}
          cats={[totalExpensesByAnimal["cat"]]}
          dogs={[totalExpensesByAnimal["dog"]]}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartPie
          text={"Valores por despesas"}
          labels={nameExpenses}
          dataAnimals={sortTopExpenses}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <SearchTotal
          title="Total geral de despesas "
          data={`${totalExpenses} R$`}
        />
      </ContainerDashboard>
    </>
  );
};

export default ChartExpensesWrapper;
