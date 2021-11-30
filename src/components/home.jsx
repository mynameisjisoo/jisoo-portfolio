import React from 'react';
import styled, { css } from 'styled-components';
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
`;

const StyledH1 = styled.h1`
  padding: 0.2rem;
  font-size: 2.4rem;
`;

const Name = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.mint};
    `;
  }}
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Home = props => {
  return (
    <Wrapper>
      <StyledH1>
        안녕하세요!
        <br />
        매일 한뼘 씩 성장하는 개발자 <br />
        <Name>이지수</Name>입니다.
      </StyledH1>
      <img src='/imgs/jisoo-emoji-macbook.png' />
    </Wrapper>
  );
};

export default Home;
