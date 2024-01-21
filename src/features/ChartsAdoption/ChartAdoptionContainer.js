import { ChartsAdoptionProvider } from "./ChartsAdoptionProvider";
import ChartAdoptionWrapper from "./ChartAdoptionWrapper";

const ChartAdoptionContainer = () => {
  return (
    <>
      <ChartsAdoptionProvider>
        <ChartAdoptionWrapper />
      </ChartsAdoptionProvider>
    </>
  );
};

export default ChartAdoptionContainer;
