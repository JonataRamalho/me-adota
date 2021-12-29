import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 78vw;
  height: 88vh;
  border-radius: 22px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;
