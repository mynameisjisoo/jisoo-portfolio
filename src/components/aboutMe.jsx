import React from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../styles/styledComponent';

const Container = styled.section`
  display: flex;
  padding: 0 3rem;
  margin: 3rem 0;
  flex-direction: column;
  ${({ theme }) => {
    return css`
      font-family: ${theme.fonts.family.kor};
    `;
  }};
`;

const Image = styled.img`
  width: 50rem;
  /* width: 50%; */
`;

const Content = styled.div`
  /* margin: 0 2rem; */
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  padding: 3rem;
  margin: 0;
  font-size: 1.1rem;
`;

const AboutMe = props => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <Image src='/imgs/profile-resize.jpg'></Image>
        <Description>
          {/* <p></p> */}
          생명을 다루는 숭고함에 반해 간호사가 되었습니다.
          <br />
          세상이 궁금해서 배낭을 매고 모험을 떠나 세계여행을 했습니다.
          <br />
          개발자인 친구의 추천으로 해본 코딩이 재미있어서 프로그래밍 공부를
          시작했고, <br /> 이제 개발자가 되려고 합니다.
          <br />
          몰랐던 지식을 탐구하고 새로운 기술을 배우는 것을 좋아하며
          <br />
          낯설고 궁금한 것에 도전하고 경험하는 것을 즐깁니다.
          <br />
          더 나은 개발자로서의 성장을 위해 고민하고 열정을 쏟을 수 있는
          프론트앤드 개발자입니다.
          <br />
        </Description>
      </Content>
    </Container>
  );
};

export default AboutMe;
