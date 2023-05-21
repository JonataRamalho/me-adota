import styled from "styled-components";

export const ContainerSearchTotal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleDashboard};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 64px;
  font-weight: bold;
  color: rgba(51, 203, 252, 0.8);
`;
