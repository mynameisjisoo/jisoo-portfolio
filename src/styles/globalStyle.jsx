import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
     box-sizing : border-box;
 }

 ul{
     list-style: none;
     padding-left: 0;
 }
`;

export default GlobalStyle;
