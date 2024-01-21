import styled from "styled-components";

export const MainCustom = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainCustomContent = styled(MainCustom)`
  height: inherit;
`;

export const MainDashboardCustom = styled(MainCustom)`
  height: 80%;
  margin-top: 8px;
`;
