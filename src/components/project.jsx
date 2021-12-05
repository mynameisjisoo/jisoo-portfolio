import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

const Category = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: brown; */
  margin: 2rem 1rem;
`;

const Button = styled.button`
  /* border: solid 2px ${({ theme }) => theme.darkThemeColors.pointColor}; */
  border-radius: 1rem;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.family.eng};
  font-weight: bold;
  padding: 1rem 4rem;
  margin: 0 1rem;
  min-width: 15.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.darkThemeColors.pointColor};
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.darkThemeColors.pointColor2};
    color: black;
  }
`;

const Projects = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.a`
  color: white;
  background-color: black;

  text-align: center;
  margin: 0.5rem;
  padding: 1.5rem;
  width: 20rem;
  position: relative;
  text-decoration: none;

  & h3 {
    margin: 0;
  }
  & img {
    width: 100%;
  }
`;

const Description = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  transform: translateY(15px);
  transition: all 300ms ease-in;

  h3 {
    color: white;
    align-self: center;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(0px);
  }
`;

const Project = props => {
  const data = {
    javascript: [
      {
        name: 'carrot',
        src: 'imgs/favicon-tiny.png',
        link: 'https://www.google.com',
        description: 'carrot'
      },
      {
        name: 'miniShoppingmall',
        src: 'imgs/favicon-tiny.png',
        link: 'https://www.naver.com',
        description: 'shopping'
      }
    ],
    react: [
      {
        name: 'habbitTracker',
        src: 'imgs/jisoo-emoji.png',
        link: 'https://www.naver.com',
        description: 'habbit'
      },
      {
        name: 'sootube',
        src: 'imgs/jisoo-emoji.png',
        link: 'https://www.naver.com',
        description: 'youtube'
      },
      {
        name: 'cardMaker',
        src: 'imgs/jisoo-emoji.png',
        link: 'https://www.naver.com',
        description: 'cardMaker'
      },
      {
        name: 'movieDiary',
        src: 'imgs/jisoo-emoji.png',
        link: 'https://www.naver.com',
        description: 'movieDiary'
      }
    ],
    java: [
      {
        name: '똥피하기게임',
        src: 'imgs/jisoo-emoji.png',
        link: 'https://www.naver.com',
        description: 'movieDiary'
      }
    ]
  };

  const [selectedProject, setSelectedProject] = useState();
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
              <Item href={item.link} target='_blank'>
                <h3>{item.name}</h3>
                <img src={item.src} alt={item.name} />
                <Description>
                  <h3>{item.description}</h3>
                </Description>
              </Item>
            );
          })}
      </Projects>
    </Section>
  );
};

export default Project;
