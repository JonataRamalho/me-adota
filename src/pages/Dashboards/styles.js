import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonCustom = styled(Button)`
  && {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 700;
    text-transform: capitalize;
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary};

    background-color: ${(props) => props.theme.colors.primary};

    width: 208px;
    height: 44px;
    border-radius: 6px;
    box-shadow: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.background};
      box-shadow: none;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(2, 208px);
  column-gap: 32px;

  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;
