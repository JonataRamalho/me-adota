import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputTextOutlined = styled(TextField)`
  /* .MuiTextField-root {
    outline-color: red !important;
  } */

  fieldset {
    border-color: transparent !important;
  }
  .MuiOutlinedInput-notchedOutline {
    /* .MuiOutlinedInput-input .MuiInputBase-input .MuiInputBase-inputHiddenLabel { */
    &:focus {
      border-color: ${(props) => props.theme.colors.background} !important;
    }
    /* &:focus { */
    /* outline-color: ${(props) => props.theme.colors.background} !important; */
    /* } */
  }

  input {
    width: 272px;
    height: 18px;
    background-color: ${(props) => props.theme.colors.input};
  }
`;
