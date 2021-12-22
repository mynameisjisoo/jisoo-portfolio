import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

const SkillsBox = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Skill = styled.article`
  border: 3px solid ${({ theme }) => theme.pointColor2};
  border-radius: 1rem;
  margin: 1rem;
  width: 25rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  

  & h3 {
    font-size: 1.5rem;
    text-align: center;
    margin: 0.6rem 0 1rem 0;
  }

  & li {
    font-size: 1.2rem;
    padding: 0 0.7rem;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  align-self: center;
  color: ${({ theme }) => theme.pointColor2};
  transition: all 300ms ease-out;

  &:hover {
    color: ${({ theme }) => theme.pointColor};
    transform: rotate(20deg);
  }
`;

const Skills = forwardRef((param = {}, ref) => {
  return (
    <Section ref={ref} id='skills'>
      <Title>Skills</Title>
      <SkillsBox>
        <Skill>
          <Icon icon={faHtml5} />
          <h3>HTML</h3>
          <li>
            시멘틱 태그에 대해 이해하고 접근성을 고려하기 위해 노력
          </li>
        </Skill>
        <Skill>
          <Icon icon={faCss3} />
          <h3>CSS</h3>
          <li>mediaQuery를 사용한 반응형 스타일링</li>
          <li>flex, grid 를 활용한 레이아웃</li>
          <li>BEM 방법론 적용</li>
          <li>
            Post CSS를 이용한 모듈화, styled-components를 이용한 컴포넌트
            스타일링
          </li>
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
          <li>React Hooks 사용, 함수 컴포넌트 개발</li>
          <li>React Router, firebase 등 라이브러리 사용 경험</li>
        </Skill>
        <Skill>
          <Icon icon={faJava} />
          <h3>Java</h3>
          <li>기본 java 문법과 객체지향개념에 대한 이해</li>
        </Skill>
        <Skill>
          <Icon icon={faTools} />
          <h3>Tools</h3>
          <li>Git, GitKraken</li>
          <li>VS Code, Eclipse</li>
          <li>Slack</li>
          <li>Postman</li>
        </Skill>
      </SkillsBox>
    </Section>
  );
});

export default Skills;
