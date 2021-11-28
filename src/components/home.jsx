import React from 'react';
import styled, { css } from 'styled-components';
const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
      /* background-color: black; */
      color: ${theme.colors.silver};
      /* font-size: ${theme.fonts.size.base}; */
    `;
  }}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0.2rem;
`;

const Image = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
`;

const Home = props => {
  return (
    <Wrapper>
      <StyledH1>
        안녕하세요! 매일 한뼘 씩 성장하는 개발자 이지수입니다.{' '}
      </StyledH1>
      <Image src='/imgs/profile2.jpg'></Image>
      {/* <Image src='/imgs/profile-resize.jpg'></Image> */}
    </Wrapper>
  );
};

export default Home;
