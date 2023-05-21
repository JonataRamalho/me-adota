import { Wrapper, Content, ContentDashboard } from "./styles";

const Background = (props) => {
  return (
    <Wrapper>
      {props.dashboard ? (
        <ContentDashboard>{props.children}</ContentDashboard>
      ) : (
        <Content>{props.children}</Content>
      )}
    </Wrapper>
  );
};

export default Background;
