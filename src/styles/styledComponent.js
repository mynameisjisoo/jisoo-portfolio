import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding: 3rem;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    padding: 1.5rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  margin-top: 0;
`;
