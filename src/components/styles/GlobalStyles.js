import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  @media only screen and (max-width: 400px) {
    font-size: 75%;
  }
}

body {
  height: 100vh;
  width: 100vw;

  font-size: 1.5rem;
  text-align: left;
  -webkit-font-smoothing: antialiased;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
