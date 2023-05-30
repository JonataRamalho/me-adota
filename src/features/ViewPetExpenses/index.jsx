import { TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { Title } from "../../components";
import {
  ButtonCustom,
  ContainerViewPetExpenses,
  TableCellCustom,
  TableCustom,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GeneralProviderContext } from "../Providers/GeneralProvider";
import { useQuery } from "react-query";
import api from "../../services/api";

const ViewPetExpenses = () => {
  const navigate = useNavigate();
  const { idPet } = useParams();
  const { institutionData } = useContext(GeneralProviderContext);

  const { isLoading, data } = useQuery(["get-expenses"], async () => {
    return api.get("api/expenses", {
      headers: { "Content-Type": "application/json" },
    });
  });

  const findExpenses = (animalId) => {
    if (!!institutionData) {
      const { id } = JSON.parse(institutionData);

      if (isLoading === false) {
        const filteredExpenses = data?.data?.content?.filter((expense) => {
          return (
            expense.animal.id == animalId && expense.animal.institution.id == id
          );
        });

        return filteredExpenses;
      }
    }
  };

  const dataExpenses = findExpenses(idPet);

  return (
    <ContainerViewPetExpenses>
      <Title content="Despesas" />
      <div>
        <TableContainer>
          <TableCustom>
            <TableHead>
              <TableRow>
                <TableCellCustom $isBold={true} align="center">
                  Tipo
                </TableCellCustom>
                <TableCellCustom $isBold={true} align="center">
                  Valor
                </TableCellCustom>
                <TableCellCustom $isBold={true} align="center">
                  Ação
                </TableCellCustom>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataExpenses?.slice(0, 6)?.map((item) => (
                <TableRow key={item.name}>
                  <TableCellCustom align="center">
                    {`${item.name}${
                      item.description.legtn > 0 ? "/" + item.description : ""
                    }`}
                  </TableCellCustom>
                  <TableCellCustom align="center">R$ 1000</TableCellCustom>
                  <TableCellCustom align="center">
                    <ButtonCustom
                      variant="contained"
                      size="small"
                      color="warning"
                      onClick={() =>
                        navigate(
                          `/menu/pets/${idPet}/visualizar-despesas/editar/${dataExpenses.id}`
                        )
                      }
                    >
                      Editar
                    </ButtonCustom>
                  </TableCellCustom>
                </TableRow>
              ))}
            </TableBody>
          </TableCustom>
        </TableContainer>
      </div>
    </ContainerViewPetExpenses>
  );
};

export default ViewPetExpenses;
