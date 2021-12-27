import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import theme from "./theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
