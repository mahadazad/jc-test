import React from 'react';
import styled from 'styled-components';

import Content from 'components/Content';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <Content>
      <Container>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </Container>
    </Content>
  );
};

const Container = styled.section`
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 2em;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Body = styled.div`
  padding: 20px 0;
  font-size: 1.2em;
`;

export default Section;
