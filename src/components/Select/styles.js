import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const SelectCustom = styled(Select)`
  background-color: ${(props) => props.theme.colors.input};
  width: 290px;
  height: 48px;

  && {
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-size: 15px;
    font-weight: 500;
  }
`;

export const MenuItemCustom = styled(MenuItem)`
  && {
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-size: 15px;
    font-weight: 500;
  }
`;
