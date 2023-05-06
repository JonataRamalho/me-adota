import { ContainerContentCustom } from "./styles";

const ContainerContent = (props) => {
  return (
    <ContainerContentCustom>
      {props.children}
    </ContainerContentCustom>
  );
};

export default ContainerContent;
