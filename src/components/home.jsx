import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Section } from '../styles/styledComponent';

const HomeSection = styled(Section)`
  align-items: center;
  text-align: center;
`;

const StyledH1 = styled.h1`
  padding: 0.2rem;
  font-size: 2.4rem;
`;


const Name = styled.span`
  ${({ theme }) => {
    return css`
      color: ${({ theme }) => theme.darkThemeColors.pointColor};
    `;
  }}
`;

const Home = forwardRef((param = {}, ref) => {
  return (
    <HomeSection ref={ref} id='home'>
      <StyledH1>
        안녕하세요!
        <br />
        매일 한뼘 씩 성장하는 개발자 <br />
        <Name>이지수</Name>입니다.
      </StyledH1>
      <img src='/imgs/jisoo-emoji-macbook.png' alt='jisoo-emoji' />
    </HomeSection>
  );
});

export default Home;
