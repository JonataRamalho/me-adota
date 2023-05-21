import { ContainerSearchTotal, ContainerTitle, Text, Title } from "./styles";

const SearchTotal = ({ title, data }) => {
  return (
    <ContainerSearchTotal>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <div>
        <Text>{data}</Text>
      </div>
    </ContainerSearchTotal>
  );
};

export default SearchTotal;
