import { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import AppLayout from "./components/styles/AppLayout.styled";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AppLayout>
          <Header />
        </AppLayout>
      </>
    </ThemeProvider>
  );
}

export default App;
