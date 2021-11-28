import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  /* height: 100%; */
`;

const Image = styled.img`
  width: 70rem;
`;

const Home = props => {
  return (
    <Wrapper>
      <Image src='/imgs/profile2.jpg'></Image>
      <Image src='/imgs/profile-resize.jpg'></Image>
    </Wrapper>
  );
};

export default Home;
