import { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import AppLayout from "./components/styles/AppLayout.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AppLayout>
          <h1>FAQ Accordion</h1>
        </AppLayout>
      </>
    </ThemeProvider>
  );
}

export default App;
