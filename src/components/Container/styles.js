import styled from "styled-components";

export const ContainerHeaderCustom = styled.div`
  height: 50%;
`;

export const ContainerContentCustom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDashboardCustom = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 400px;
  height: 256px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 16px;

  @media (max-width: 1366px) {
    width: 360px;
    height: 216px;
  }
`;
