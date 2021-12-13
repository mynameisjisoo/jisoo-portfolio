import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

const pointColor = css`
  ${({ theme }) =>
    css`
      ${theme.darkThemeColors.pointColor}
    `}
`;

const TimelineContainer = styled.div`
  margin: 0 auto;
  transform: translateX(5rem);

  @media ${({ theme }) => theme.device.tablet} {
    transform: translateX(0);
  }
`;

const Item = styled.div`
  padding: 3rem 2em 2em;
  position: relative;
  border-left: 2px solid ${pointColor};

  &::before {
    content: '${props => props.date}';
    position: absolute;
    left: 2em;
    top: 1em;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    color: ${pointColor};
  }

  &::after {
    width: 10px;
    height: 10px;
    display: block;
    top: 1em;
    position: absolute;
    left: -7px;
    border-radius: 10px;
    content: '';
    border: 2px solid ${pointColor};
    background: ${pointColor};
  }
`;

const History = styled.p`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  display: flex;
`;

const Timeline = forwardRef((param = {}, ref) => {
  return (
    <Section ref={ref} id='timeline'>
      <Title>Timeline</Title>
      <TimelineContainer>
        <Item date='2021.5 ~ 현재'>
          <History>독학으로 프로그래밍 공부</History>
        </Item>
        <Item date='2019.5 ~ 2021.5'>
          <History>도봉구 치매안심센터 근무</History>
        </Item>
        <Item date='2018.10~2019.2'>
          <History>세계여행</History>
        </Item>
        <Item date='2017.12~2018.6'>
          <History>평택시 치매안심센터 근무</History>
        </Item>
        <Item date='2016.5~2017.5'>
          <History>동국대학교 병원 근무</History>
        </Item>
        <Item date='2016.2'>
          <History>대전과학기술대학교 간호학부 졸업</History>
        </Item>
      </TimelineContainer>
    </Section>
  );
});

export default Timeline;
