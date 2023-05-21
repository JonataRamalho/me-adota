import { useContext } from "react";
import {
  ChartBar,
  ChartBarHorizontal,
  ChartPie,
  ContainerDashboard,
  SearchTotal,
} from "../../components";
import { ChartsAdoptionContext } from "./ChartsAdoptionProvider";

const ChartAdoptionWrapper = () => {
  const {
    dataDistricts,
    catsByDistrict,
    dogsByDistrict,
    dataAge,
    sortAnimalByAge,
    catsByGender,
    dogsByGender,
    sortAnimalPersonalities,
    namePersonalities,
    catsByCastraded,
    dogsByCastraded,
    counSearchTotal,
  } = useContext(ChartsAdoptionContext);

  return (
    <>
      <ContainerDashboard>
        <ChartBar
          text={"Animais mais buscados por bairro"}
          labels={dataDistricts}
          cats={catsByDistrict}
          dogs={dogsByDistrict}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartPie
          text={"Faixas etárias mais buscadas"}
          labels={dataAge}
          dataAnimals={sortAnimalByAge}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartBarHorizontal
          text={"Animais mais buscados por sexo"}
          labels={["Fêmea", "Macho"]}
          cats={catsByGender}
          dogs={dogsByGender}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <SearchTotal
          title="Total de pesquisas realizadas"
          data={counSearchTotal}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartPie
          text={"Personalidades mais buscadas"}
          labels={namePersonalities}
          dataAnimals={sortAnimalPersonalities}
        />
      </ContainerDashboard>
      <ContainerDashboard>
        <ChartBarHorizontal
          text={"Animais mais buscados por castrado e não castrado"}
          labels={["Castrado", "Não castrado"]}
          cats={catsByCastraded}
          dogs={dogsByCastraded}
        />
      </ContainerDashboard>
    </>
  );
};

export default ChartAdoptionWrapper;
