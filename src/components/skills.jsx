import {
  faCss3,
  faHtml5,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Container, Title } from '../styles/styledComponent';

const SkillsBox = styled.section`
  border: solid 1px white;
`;

const Skill = styled.article`
  border: 1px solid wheat;
`;

const IconWrapper = styled.div`
  border: solid 2px white;
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  border-radius: 50%;
  margin: auto;
  text-align: center;
  font-size: 5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;
const Skills = props => {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillsBox>
        <h2>Skills</h2>
        <Skill>
          <Icon icon={faHtml5} />
          <h3>HTML</h3>
          <li>시멘틱 마크업에 대한 이해</li>
          <li>접근성을 고려한 마크업</li>
        </Skill>
        <Skill>
          <Icon icon={faCss3} />
          <h3>CSS</h3>
          <li>mediaQuery를 사용한 반응형 스타일링</li>
          <li>flex, grid 를 활용한 레이아웃</li>
          <li>
            Post CSS를 이용한 모듈화, styled-components를 이용한 컴포넌트
            스타일링
          </li>
          <li>BEM 방법론 적용</li>
        </Skill>
        <Skill>
          <Icon icon={faJs} />
          <h3>JavaScript</h3>
          <li>ES6 문법</li>
          <li>Vanilla JS로 동적인 웹앱 개발 </li>
          <li>Rest API 활용한 웹앱 개발</li>
          <li>성능 최적화를 위한 브라우저 런타임 환경 이해</li>
        </Skill>
        <Skill>
          <Icon icon={faReact} />
          <h3>React</h3>
          <li>React 기반의 SPA 개발 </li>
          <li>React Hooks 사용, 함수 컴포넌트 개발에 익숙함</li>
          <li>React Router, firebase 등 라이브러리 사용 경험</li>
        </Skill>
      </SkillsBox>
    </Container>
  );
};

export default Skills;
