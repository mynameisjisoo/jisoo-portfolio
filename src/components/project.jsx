import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

const Subtitle = styled.h1`
  text-align: center;
  margin: 0;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
`;

const Button = styled.button`
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.family.eng};
  font-weight: bold;
  padding: 1rem 3rem;
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
  width: 100rem;
  margin: auto;
  flex-wrap: wrap;
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

  const setAllselected = () => {
    const entireData = [];
    let i = 0;
    const keys = Object.keys(data);
    for (let key in data) {
      const values = data[key];
      for (let value in values) {
        entireData[i] = values[value];
        i++;
      }
    }
    return entireData;
  };

  const [selectedProject, setSelectedProject] = useState(setAllselected);

  const onButtonClick = e => {
    const selected = e.target.value;
    if (!selected) {
      return;
    } else if (selected === 'all') {
      setSelectedProject(setAllselected);
      return;
    }
    setSelectedProject(data[selected]);
  };

  return (
    <Section>
      <Title>Project and Experience</Title>
      <Subtitle>Projects</Subtitle>
      <Category onClick={onButtonClick}>
        <Button value='all'>All</Button>
        <Button value='javascript'>JavaScript</Button>
        <Button value='react'>React</Button>
        <Button value='java'>Java</Button>
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
