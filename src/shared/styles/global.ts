import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans KR", "Noto Naskh Arabic", "Noto Sans Thai", "Noto Sans Hebrew", "Noto Sans Bengali", sans-serif;
  }
`;