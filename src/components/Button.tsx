import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button: React.FC<Props> = ({ title, onClick, type = 'button', className }) => {
  return (
    <Container onClick={onClick} type={type} className={className}>
      {title}
    </Container>
  );
};

const Container = styled.button`
  background: #00d1b2;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
