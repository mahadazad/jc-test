import React from 'react';
import styled from 'styled-components';

import Content from 'components/Content';

interface Props {
  image: string;
  title?: string;
  subTitle?: string;
}

const HeroImage: React.FC<Props> = ({ image, title, subTitle }) => {
  return (
    <Container image={image}>
      <Inner>
        {!!title && <Title>{title}</Title>}
        {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Inner>
    </Container>
  );
};

const Container = styled.div<{ image: string }>`
  width: 100%;
  height: 420px;
  background: url(${({ image }) => image});
  background-size: cover;
`;

const Inner = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-shadow: 1px 1px 7px #000;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4em;
`;

const SubTitle = styled.h2`
  margin: 10px 0 0 0;
  font-size: 2em;
`;

export default HeroImage;
