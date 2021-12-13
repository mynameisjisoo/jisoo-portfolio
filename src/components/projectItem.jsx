import React from 'react';
import styled from 'styled-components';

const Item = styled.a`
  color: white;
  background-color: black;
  text-align: center;
  margin: 0 1rem;
  padding: 1rem;
  width: 20rem;
  min-width: 20rem;
  height: 23rem;
  position: relative;
  text-decoration: none;

  display: flex;
  justify-content: center;
  flex-direction: column;

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
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  transform: translateY(15px);
  transition: all 300ms ease-in;

  h2,
  h3 {
    padding: 0 0.8rem;
    color: white;
    align-self: center;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(0px);
  }
`;
const ProjectItem = ({ item }) => {
  return (
    <Item href={item.link} target='_blank'>
      <img src={item.src} alt={item.name} />
      <Description>
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
      </Description>
    </Item>
  );
};
export default ProjectItem;
