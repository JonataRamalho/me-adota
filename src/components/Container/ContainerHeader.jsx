import { ContainerHeaderCustom } from "./styles";

const ContainerHeader = (props) => {
  return (
    <ContainerHeaderCustom>
      {props.children}
    </ContainerHeaderCustom>
  );
};

export default ContainerHeader;
