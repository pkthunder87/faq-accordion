import { ThemeProvider } from "styled-components";
import StyledContainer from "./components/styles/Container.styled";
import { useState } from "react";
import theme from "./components/styles/theme";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <>
        <GlobalStyles />
        <StyledContainer>
          <h1>FAQ Accordion</h1>
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
