import { Button, Table, TableCell, TableContainer } from "@mui/material";
import styled from "styled-components";
// import { styled as styledMaterial } from "@mui/system";

export const ContainerViewPetExpenses = styled.div`
  width: 100%;
  height: calc(100% - 72px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableCustom = styled(Table)`
  width: 504px !important;
`;

export const TableCellCustom = styled(TableCell)`
  width: 100px !important;
  font-weight: ${(props) => props.$isBold && "bold !important"};

  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px !important;
`;

export const ButtonCustom = styled(Button)`
  && {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 500;
    text-transform: initial;
    font-size: 14px;

    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`;
