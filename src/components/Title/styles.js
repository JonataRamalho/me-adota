import styled from "styled-components";

export const GeneralTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 22px;
  font-weight: 500;

  color: ${(props) => props.theme.colors.title};

  margin-bottom: 8px;
`;
