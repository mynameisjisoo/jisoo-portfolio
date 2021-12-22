import React, { forwardRef, memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';
import ProjectItem from './projectItem';
import theme from '../styles/theme';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useMemo } from 'react/cjs/react.development';

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

  @media ${theme.device.tablet} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: ${theme.fonts.family.eng};
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 0 1rem;
  min-width: 15rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.pointColor};
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.pointColor2};
    color: black;
  }

  @media ${theme.device.tablet} {
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
    color: ${({ theme }) => theme.pointColor};
  }

  .swiper-pagination-bullet {
    background-color: silver;
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.pointColor};
  }

  @media ${theme.device.tablet} {
    width: 100%;
  }
`;

const Project = memo(forwardRef((param = {}, ref) => {
  const data = useMemo(() => {
    return {
      javascript: [
        {
          name: 'Find a carrot',
          src: 'imgs/project/carrot.png',
          link: 'https://github.com/mynameisjisoo/carrot-game',
          description: '순수 JavaScript, CSS, HTML 을 이용한 당근찾기 게임'
        },
        {
          name: 'Mini Shoppingmall',
          src: 'imgs/project/minishoppingmall.png',
          link: 'https://github.com/mynameisjisoo/mini-shoppingmall',
          description:
            'json파일의 데이터를 자바스크립트를 이용해 동적으로 보여주는 연습을 한 프로젝트'
        }
      ],
      react: [
        {
          name: 'My Movie Diary',
          src: 'imgs/project/mymoviediary.png',
          link: 'https://github.com/mynameisjisoo/movie-diary',
          description:
            '영화 검색 API와 Firebase 라이브러리를 이용한 영화 검색 및 리뷰 기록 어플리케이션'
        },
        {
          name: 'Card Maker',
          src: 'imgs/project/cardmaker.png',
          link: 'https://github.com/mynameisjisoo/card-maker',
          description: 'React Router를 이용한 다중페이지 명함 제작 어플리케이션'
        },

        {
          name: 'SooTube',
          src: 'imgs/project/sootube.png',
          link: 'https://github.com/mynameisjisoo/youtube-clone',
          description: 'Youtube API와 React를 이용한 유튜브 검색기능 클론코딩'
        },

        {
          name: 'Habit tracker',
          src: 'imgs/project/habittracker.png',
          link: 'https://github.com/mynameisjisoo/habbit-tracker',
          description: 'React기본 개념 공부를 위해만든 Habit Tracker'
        }
      ],
      java: [
        {
          name: '똥피하기게임',
          src: 'imgs/project/ddong.png',
          link: 'https://github.com/mynameisjisoo/dodge-a-poo',
          description: 'java의 thread개념을 공부하면서 만든 플래시게임'
        },
        {
          name: '계산기게임',
          src: 'imgs/project/operation.png',
          link: 'https://www.naver.com',
          description: 'java로 만든 연산 게임'
        }
      ]
    }
  }, []);

  const setAllselected = useCallback(() => {
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
  }, [data]);

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
    <Section ref={ref} id='project'>
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
            <SwiperSlide key={item.name}>
              <ProjectItem item={item} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </Section>
  );
}));

export default Project;
