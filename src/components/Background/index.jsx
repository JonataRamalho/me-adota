import { Wrapper, Content } from "./styles";

const Background = (props) => {
  return (
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default Background;
