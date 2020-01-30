import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import NavLink from 'components/NavLink';
import Link from 'components/Link';
import { selectUid } from 'modules/auth/selectors';
import { logout } from 'modules/auth/actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <NavLink to="/" label="Home" />
      </div>
      <div>
        {uid ? (
          <>
            <NavLink to="/profile" label="Profile" />
            <Link label="Logout" onClick={onLogout} />
          </>
        ) : (
          <>
            <NavLink to="/login" label="Login" />
            <NavLink to="/save-profile" label="Register" />
          </>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #f5f5f5;
`;

export default Header;
