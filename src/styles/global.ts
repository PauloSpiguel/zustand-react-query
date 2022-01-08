import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --color-primary: #333;
    --color-secondary: #fff;
    
    --color-text: #fff;
    --color-background: #333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  ul{
    list-style: none;
  }

`;

export default GlobalStyle;
