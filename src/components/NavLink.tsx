import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from 'react-router-dom';

import { styles } from 'components/Link';

interface Props {
  to: string;
  label: string;
}

const NavLink: React.FC<Props> = ({ to, label }) => {
  let active = !!useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Container to={to} isactive={String(active)}>
      {label}
    </Container>
  );
};

const Container = styled(Link)<{ isactive: string }>`
  ${styles}
`;

export default NavLink;
