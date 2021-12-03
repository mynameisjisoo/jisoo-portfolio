import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

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

const Item = styled.div``;

const Project = props => {
  const data = {
    javascript: {
      carrot: {
        src: 'imgs/favicon-tiny.png',
        link: 'www.google.com',
        description: 'carrot'
      },
      miniShoppingmall: {
        src: 'imgs/favicon-tiny.png',
        link: 'www.naver.com',
        description: 'shopping'
      }
    },
    react: {
      habbitTracker: {
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'habbit'
      },
      sootube: {
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'youtube'
      },
      cardMaker: {
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'cardMaker'
      },
      movieDiary: {
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'movieDiary'
      }
    },
    java: {
      pooGame: {
        src: 'imgs/jisoo-emoji.png',
        link: 'www.naver.com',
        description: 'movieDiary'
      }
    }
  };

  // const [activeButton, setActiveButton] = useState('All');
  const [selectedProject, setSelectedProject] = useState([]);

  const onButtonClick = e => {
    const selected = e.target.outerText.toLowerCase();
    if (!selected) {
      return;
    }
    setSelectedProject(data[selected]);
    console.log(selectedProject);
    // for (let key in data[selected]) {
    //   const value = data[selected][key];
    //   console.log(value);
    // }
  };

  useEffect(() => {
    for (let key in selectedProject) {
      const value = selectedProject[key];
      console.log(value);
    }
  }, [selectedProject]);

  return (
    <Section>
      <Title>Project and Experience</Title>
      <h1>Project</h1>
      <Category onClick={onButtonClick}>
        <Button>All</Button>
        <Button>JavaScript</Button>
        <Button>React</Button>
        <Button>Java</Button>
        {selectedProject}
      </Category>
    </Section>
  );
};

export default Project;
