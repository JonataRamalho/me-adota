import { ChartsExpensesProvider } from "./ChartsExpensesProvider";
import ChartExpensesWrapper from "./ChartExpensesWrapper";

const ChartAdoptionContainer = () => {
  return (
    <>
      <ChartsExpensesProvider>
        <ChartExpensesWrapper />
      </ChartsExpensesProvider>
    </>
  );
};

export default ChartAdoptionContainer;
