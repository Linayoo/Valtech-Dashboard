import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
   }

   button {
      cursor: pointer;
   }
`;
