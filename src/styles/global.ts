import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  :root {
    --white: #fff;

    
    --gray-900: #333333;
    --gray-500: #999999;
    --gray-300: #D9D9D9;
    
    --blue-950: #2F2E41;
    --blue-500: #009EDD;

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
      background: var(--blue-950);
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
