import React from 'react';
import styled, { css } from 'styled-components';

const FooterSection = props => {
  const StyledFooter = styled.footer`
    text-align: center;
    padding: 1rem 0;

    ${({ theme }) => {
      return css`
        font-family: ${theme.fonts.family.eng};
        background-color: ${theme.darkThemeColors.navbarColor};
      `;
    }};
  `;
  return (
    <StyledFooter>
      <p>Copyright © 2021 | All rights reserved. | JISOO LEE</p>
    </StyledFooter>
  );
};

export default FooterSection;
