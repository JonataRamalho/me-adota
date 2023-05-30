import { Button } from "@mui/material";
import styled from "styled-components";

export const ContainerEditPetExpenses = styled.div`
  width: 100%;
  height: calc(100% - 72px);

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-column-gap: 48px;
  grid-row-gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 240px;
  height: 44px;

  padding-left: 16px;

  border-radius: 4px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

export const ButtonCustom = styled(Button)`
  && {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 700;
    text-transform: initial;
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary};

    background-color: ${(props) =>
      props.delete ? props.theme.colors.delete : props.theme.colors.primary};

    width: 258px;
    height: 44px;
    border-radius: 4px;

    box-shadow: none;

    &:hover {
      background-color: ${(props) =>
        props.delete ? props.theme.colors.delete : props.theme.colors.primary};
      box-shadow: none;
      opacity: 0.8;
      transition: 400ms;
    }
  }
`;
