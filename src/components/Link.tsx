import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  onClick?: () => void;
  label: string;
  active?: boolean;
}

const Link: React.FC<Props> = ({ onClick, active, label }) => {
  return (
    <Container onClick={onClick} isactive={String(active)}>
      {label}
    </Container>
  );
};

export const styles = css<{ isactive: string }>`
  display: inline-flex;
  padding: 0 20px;
  font-size: 1.2em;
  letter-spacing: 0.5px;
  text-decoration: ${({ isactive }) => (isactive === 'true' ? 'underline' : 'none')};
  color: #000;
  cursor: pointer;
`;

const Container = styled.a`
  ${styles}
`;

export default Link;
