import { MainCustom } from "./styles";

const Main = (props) => {
  return (
    <MainCustom>
      {props.children}
    </MainCustom>
  );
};

export default Main;
