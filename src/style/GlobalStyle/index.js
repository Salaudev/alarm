import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #191F37;
    
    .timerBlock{
      height: 100vh;
      display: flex;
      flex-direction: column;
      .main{
        flex: 1;
      }
  }

    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    a{
      text-decoration: none !important;
    }
  }
`;

export default GlobalStyle;
