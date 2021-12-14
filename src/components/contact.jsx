import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';
import theme from '../styles/theme';

const Wrapper = styled.div`
  margin: auto;
  padding: 2rem 0;
`;

const ContactInfo = styled.li`
  text-align: center;
  list-style: none;
  margin: 0 1rem;
  display: inline-flex;
  align-items: center;
  font-size: 1.3rem;
  font-family: ${theme.fonts.family.eng};

  h3 {
    font-size: 1.6rem;
    margin: 0;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.pointColor};

  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.baseColor};

  }

  p:hover,
  a:hover {
    color: ${({ theme }) => theme.pointColor2};

  }
`;
const Contact = forwardRef((param = {}, ref) => {
  return (
    <Section ref={ref} id='contact'>
      <Title>Contact</Title>

      <Wrapper>
        <ContactInfo>
          <h3>Email</h3>
          <a href='mailto:devjisoolee@gmail.com' target='_blank' rel="noreferrer">devjisoolee@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          <h3>Github</h3>
          <a href='https://github.com/mynameisjisoo' target='_blank' rel="noreferrer">
            github.com/mynameisjisoo
          </a>
        </ContactInfo>
        <ContactInfo>
          <h3>Notion</h3>
          <a href='https://devjisoo.notion.site/Programing-study-8375aac256864f0a9ec9b3a6c892e8c4' target='_blank' rel="noreferrer">
            Notion
          </a>
        </ContactInfo>
        <ContactInfo>
          <h3>Phone</h3>
          <p>010 2879 5776</p>
        </ContactInfo>
      </Wrapper>
    </Section>
  );
});

export default Contact;
