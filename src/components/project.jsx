import React, { useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';
import ProjectItem from './projectItem';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Subtitle = styled.h1`
  text-align: center;
  margin: 0;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  align-items: center;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.family.eng};
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 0 1rem;
  min-width: 15rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.darkThemeColors.pointColor};
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.darkThemeColors.pointColor2};
    color: black;
  }

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    margin: 0.3rem 0;
    width: 80%;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 75%;
  height: 28rem;
  padding: 1rem 2rem;
  margin: auto;

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: ${({ theme }) => theme.darkThemeColors.pointColor};
  }

  .swiper-pagination-bullet {
    background-color: silver;
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.darkThemeColors.pointColor};
  }

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    width: 100%;
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

  const slideSetting = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
      type: 'bullets'
    },
    slidesOffsetBefore: 10,
    autoplay: { delay: 2500 },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
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
      <StyledSwiper {...slideSetting}>
        {selectedProject.map(item => {
          return (
            <SwiperSlide>
              <ProjectItem item={item} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </Section>
  );
};

export default Project;
