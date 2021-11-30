import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Title } from '../styles/styledComponent';

const TimelineContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Item = styled.div`
  padding: 3rem 2em 2em;
  position: relative;
  border-left: 2px solid lightyellow;

  &::before {
    content: '${props => props.date}';
    position: absolute;
    left: 2em;
    font-weight: bold;
    top: 1em;
    display: block;
    font-weight: 700;
    font-size: 0.785rem;
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
    border: 2px solid lightcoral;
    background: white;
  }
`;

const History = styled.h3`
  margin-bottom: 0.5rem;
`;

const Timeline = props => {
  return (
    <Container>
      <Title>Timeline</Title>
      <TimelineContainer>
        <Item date='2021'>
          <History>어쩌고 저쩌고 했다</History>
        </Item>
        <Item date='2021'>
          <History>어쩌고 저쩌고 했다</History>
        </Item>
        <Item date='2021'>
          <History>어쩌고 저쩌고 했다</History>
        </Item>
      </TimelineContainer>
    </Container>
  );
};

export default Timeline;
