import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
     box-sizing : border-box;
 }

 ul{
     list-style: none;
     padding-left: 0;
 }

 button{
  background-color: transparent;
  outline: none;
  border: none;
 }
`;

export default GlobalStyle;
