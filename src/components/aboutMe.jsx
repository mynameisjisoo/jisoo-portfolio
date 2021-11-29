import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  padding: 0 3rem;
  margin: 3rem 0;
  ${({ theme }) => {
    return css`
      font-family: ${theme.fonts.family.kor};
    `;
  }};
`;

const Image = styled.img`
  width: 50rem;
`;

const Content = styled.div`
  margin: 0 2rem;
`;

const AboutMe = props => {
  return (
    <Container>
      <Image src='/imgs/profile-resize.jpg'></Image>
      <Content>
        <h3>
          몰랐던 지식을 탐구하고 새로운 기술을 배우는 것을 좋아하며
          <br />
          낯설고 궁금한 것에 도전하고 경험하는 것을 즐깁니다.
          <br />
          좋아하는 일에 열정을 쏟을 수 있는 프론트앤드 개발자입니다.
          <br />
        </h3>
        <p>
          간호학과 졸업 후 대학병원 간호사로 1년, 보건소 산하기관 간호사로 2년
          7개월 근무했습니다.
          <br /> 개발자인 친구의 권유로 처음 해본 프로그래밍이 재미있어서
          개발자를 꿈꾸며 HTML, CSS, JavaScript, React를 혼자 공부했습니다.
        </p>
      </Content>
    </Container>
  );
};

export default AboutMe;
