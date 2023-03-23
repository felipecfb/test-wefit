import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  :root {
    --white: #fff;

    --background: #2F2E41;

    --gray-900: #333333;
    --gray-500: #999999;

    --blue: #009EDD;

    --green: #039B00;
  }
  
  @media screen and (max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }
  @media screen and (max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }
  body {
      background: var(--background);
      color: var(--white);
  }
  body, input, select, textarea, button {
      font: 400 1rem "Open Sans", sans-serif;
  }
  button {
      cursor: pointer;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
`;
