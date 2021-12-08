import React from 'react';
import styled from 'styled-components';

const Item = styled.a`
  color: white;
  background-color: black;
  text-align: center;
  margin: 0 1rem;
  padding: 1.5rem;
  width: 20rem;
  min-width: 20rem;
  height: 23rem;
  position: relative;
  text-decoration: none;

  display: flex;
  justify-content: center;
  flex-direction: column;

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
const ProjectItem = ({ item }) => {
  return (
    <Item href={item.link} target='_blank'>
      <h3>{item.name}</h3>
      <img src={item.src} alt={item.name} />
      <Description>
        <h3>{item.description}</h3>
      </Description>
    </Item>
  );
};
export default ProjectItem;
