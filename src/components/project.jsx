import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Section, Title } from '../styles/styledComponent';
import ProjectItem from './projectItem';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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

const StyledSwiper = styled(Swiper)`
  display: flex;
  justify-content: center;
  width: 70rem;
  height: 30rem;
  /* height: fit-content; */
  margin: auto;
  background: gray;
`;

const SlideWrapper = styled.div`
  background-color: hotpink;
`;
const Slide = styled(SwiperSlide)`
  background-color: honeydew;
  padding: 1rem 2rem;
  display: flex;
  width: fit-content;
  /* justify-content: center; */
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

      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          // type: 'bullets'
          type: 'progressbar'
        }}
        // grid={{ fill: 'row' }}
        onSwiper={swiper => console.log(swiper)}
        loop
        Autoplay={{ delay: 1000 }}
      >
        {selectedProject &&
          selectedProject.map(item => {
            return (
              <Slide>
                <ProjectItem item={item} />;
              </Slide>
            );
          })}
      </StyledSwiper>
    </Section>
  );
};

export default Project;
