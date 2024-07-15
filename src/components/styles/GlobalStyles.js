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

  background-color: var(--color-main)
}

body {
  height: 100vh;
  width: 100vw;
  
  text-align: left;
  -webkit-font-smoothing: antialiased;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-style: normal;

  background-image: url("background-pattern-desktop.svg");
  background-size: 130%;
  background-position: top 0% right 60% ;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colorBg};
  

  * {
    font-size: 1.6rem;
  }
}
`;

export default GlobalStyles;
