import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';
import Test from './test';

const Category = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  /* border: solid 2px ${({ theme }) => theme.darkThemeColors.pointColor}; */
  border-radius: 1rem;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.family.eng};
  font-weight: bold;
  /* color: ${({ theme }) => theme.darkThemeColors.baseColor}; */
  padding: 1rem 4rem;
  margin: 0 1rem;
  min-width: 15.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.darkThemeColors.pointColor};
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.darkThemeColors.pointColor2};
    /* color: black; */
  }
`;

const Projects = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.article`
  background-color: black;
  text-align: center;
  margin: 1.5rem;
  padding: 2rem;
  width: 20rem;

  /* display: flex; */
  /* justify-content: center; */
  & img {
    width: 100%;
  }
`;
const Project = props => {
  const data = {
    javascript: [
      {
        name: 'carrot',
        src: 'imgs/favicon-tiny.png',
        link: 'www.google.com',
        description: 'carrot'
      },
      {
        name: 'miniShoppingmall',
        src: 'imgs/favicon-tiny.png',
        link: 'www.naver.com',
        description: 'shopping'
      }
    ],
    react: [
      {
        name: 'habbitTracker',
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'habbit'
      },
      {
        name: 'sootube',
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'youtube'
      },
      {
        name: 'cardMaker',
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'cardMaker'
      },
      {
        name: 'movieDiary',
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'movieDiary'
      }
    ],
    java: [
      {
        name: 'pooGame',
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'movieDiary'
      }
    ]
  };

  const [selectedProject, setSelectedProject] = useState([]);
  const onButtonClick = e => {
    const selected = e.target.outerText.toLowerCase();
    if (!selected) {
      return;
    }
    setSelectedProject(data[selected]);
  };

  return (
    <Section>
      <Title>Project and Experience</Title>
      <h1>Project</h1>
      <Category onClick={onButtonClick}>
        <Button>All</Button>
        <Button>JavaScript</Button>
        <Button>React</Button>
        <Button>Java</Button>
      </Category>
      <Projects>
        {selectedProject &&
          selectedProject.map(item => {
            return (
              <Item>
                <h3>{item.name}</h3>
                <img src={item.src} alt='' />
              </Item>
            );
          })}
      </Projects>
    </Section>
  );
};

export default Project;
