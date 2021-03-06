import React, { forwardRef, memo, useCallback, useMemo, useState } from 'react';
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


SwiperCore.use([Navigation, Pagination, Autoplay]);


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
          description: '?????? JavaScript, CSS, HTML ??? ????????? ???????????? ??????'
        },
        {
          name: 'Mini Shoppingmall',
          src: 'imgs/project/minishoppingmall.png',
          link: 'https://github.com/mynameisjisoo/mini-shoppingmall',
          description:
            'json????????? ???????????? ????????????????????? ????????? ???????????? ???????????? ????????? ??? ????????????'
        }
      ],
      react: [{
        name: "Jisoo's portfolio",
        src: 'imgs/project/portfolio.png',
        link: 'https://github.com/mynameisjisoo/jisoo-portfolio',
        description: '?????? ???????????? ?????? ??? ?????????!'
      },
      {
        name: 'My Movie Diary',
        src: 'imgs/project/mymoviediary.png',
        link: 'https://github.com/mynameisjisoo/movie-diary',
        description:
          '?????? ?????? API??? Firebase ?????????????????? ????????? ?????? ?????? ??? ?????? ?????? ??????????????????'
      },
      {
        name: 'Card Maker',
        src: 'imgs/project/cardmaker.png',
        link: 'https://github.com/mynameisjisoo/card-maker',
        description: 'React Router??? ????????? ??????????????? ?????? ?????? ??????????????????'
      },

      {
        name: 'SooTube',
        src: 'imgs/project/sootube.png',
        link: 'https://github.com/mynameisjisoo/youtube-clone',
        description: 'Youtube API??? React??? ????????? ????????? ???????????? ????????????'
      },

      {
        name: 'Habit tracker',
        src: 'imgs/project/habittracker.png',
        link: 'https://github.com/mynameisjisoo/habbit-tracker',
        description: 'React?????? ?????? ????????? ???????????? Habit Tracker'
      }
      ],
      java: [
        {
          name: '??????????????????',
          src: 'imgs/project/ddong.png',
          link: 'https://github.com/mynameisjisoo/dodge-a-poo',
          description: 'java??? thread????????? ??????????????? ?????? ???????????????'
        },
        {
          name: '???????????????',
          src: 'imgs/project/operation.png',
          link: 'https://github.com/mynameisjisoo/operation-game',
          description: 'java??? ?????? ?????? ??????'
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
      <Title>Project</Title>
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
