import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const PageHeader: React.FC<Props> = ({ children }) => <Heading>{children}</Heading>;

const Heading = styled.h1`
  font-size: 2em;
  margin: 30px 0;
  text-align: center;
`;

export default PageHeader;
