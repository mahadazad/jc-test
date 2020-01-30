import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { selectLoading } from 'modules/app/selectors';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const loading = useSelector(selectLoading);
  return (
    <>
      {loading && <Loading>Please wait...</Loading>}
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 20px;
  text-align: center;
  background: #48c774;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Layout;
