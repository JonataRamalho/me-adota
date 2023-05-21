import styled from "styled-components";

export const ContainerCharts = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(3, minmax(400px, auto));

  grid-auto-rows: 300px;
  grid-gap: 16px;

  @media (max-width: 1366px) {
    grid-auto-rows: 260px;
  }

  justify-content: center;
`;
