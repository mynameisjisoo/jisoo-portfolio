import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.navbarColor};

  font-family: ${theme.fonts.family.kor};
`;

const FooterSection = props => {
  return (
    <StyledFooter>
      <h3>Copyright © 2021 | All rights reserved. | JISOO LEE</h3>
    </StyledFooter>
  );
};

export default FooterSection;
