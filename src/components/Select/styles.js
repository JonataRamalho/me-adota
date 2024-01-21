import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const SelectCustom = styled(Select)`
  background-color: ${(props) => props.theme.colors.input};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px !important;
  div {
    font-weight: 500 !important;
  }
  fieldset {
    border-color: transparent !important;
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
