import { MainCustomContent } from "./styles";

const MainWithContent = (props) => {
  return <MainCustomContent>{props.children}</MainCustomContent>;
};

export default MainWithContent;
