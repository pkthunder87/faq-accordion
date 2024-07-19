import { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import AppLayout from "./components/styles/AppLayout.styled";
import Header from "./components/Header";
import FaqAccordion from "./components/FaqAccordion";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AppLayout>
          <Header />
          <FaqAccordion />
        </AppLayout>
      </>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icon/37613/finger-up"
      >
        Cursor
      </a>{" "}
      icon by{" "}
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8
      </a>
    </ThemeProvider>
  );
}

export default App;
