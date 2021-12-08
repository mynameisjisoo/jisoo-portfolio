import React from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/styledComponent';

const Wrapper = styled.div`
  margin: auto;
`;
const ContactInfo = styled.li`
  text-align: center;
  list-style: none;
  margin: 0 1rem;
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;

  h3 {
    font-size: 1.4rem;
    margin: 0;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.darkThemeColors.pointColor};
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.darkThemeColors.baseColor};
  }
`;
const Contact = props => {
  return (
    <Section>
      <Title>Contact</Title>

      <Wrapper>
        <ContactInfo>
          <h3>Phone</h3>
          <p>010 2879 5776</p>
        </ContactInfo>
        <ContactInfo>
          <h3>Email</h3>
          <a href='mailto:devjisoolee@gmail.com'>devjisoolee@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          <h3>Github</h3>
          <a href=''>devjisoolee@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          <h3>Notion</h3>
          <a href='https://devjisoo.notion.site/Programing-study-8375aac256864f0a9ec9b3a6c892e8c4'>
            Notion
          </a>
        </ContactInfo>
      </Wrapper>
    </Section>
  );
};

export default Contact;
