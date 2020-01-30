import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <Container>&copy; {new Date().getFullYear()}</Container>;
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  font-size: 0.8em;
`;

export default Footer;
