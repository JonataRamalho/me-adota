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
  width: 78%;
  max-width: 1496px;
  height: 88%;
  max-height: 856px;
  border-radius: 22px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const ContentDashboard = styled(Content)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  max-width: none;
  max-height: none;
  border-radius: none;
  box-shadow: none;
`;
