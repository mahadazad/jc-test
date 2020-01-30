import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  * {
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
`;
