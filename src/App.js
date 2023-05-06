import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import theme from "./theme";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Reset />
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
