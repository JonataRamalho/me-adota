import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputTextOutlined = styled(TextField)`
  
  && {
    outline: none;
    border: none;
  }
  
  input {
    width: 272px;
    height: 24px;
    background-color: ${(props) => props.theme.colors.input};
  }
`;