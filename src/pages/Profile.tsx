import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Section from 'components/Section';
import { secretQuestions } from 'modules/profile/types';
import { selectProfile } from 'modules/profile/selectors';
import ButtonBase from 'components/Button';
import navigtion from 'navigation';

const Profile: React.FC = () => {
  const profile = useSelector(selectProfile);

  const onEditClick = useCallback(() => {
    navigtion.push('/save-profile');
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <Section title="User Profile">
      <Container>
        <ColumnLeft>
          {typeof profile.image === 'string' && <UserImage image={profile.image} />}
          <Button onClick={onEditClick} title="Edit Profile" />
        </ColumnLeft>

        <Column>
          <Label>Address:</Label> {profile.address}
          <Label>Date Of Birth:</Label> {profile.dateOfBirth}
          <Label>Email:</Label> {profile.email}
          <Label>Phone Number:</Label> {profile.phoneNumber}
          {secretQuestions.map(data => (
            <div key={data.key}>
              <Label>{data.question}</Label>
              {profile[data.key]}
            </div>
          ))}
        </Column>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Button = styled(ButtonBase)`
  margin-top: 20px;
`;

const ColumnLeft = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 320px;
  padding: 20px;
`;

const Label = styled.h3``;

const UserImage = styled.div<{ image: string }>`
  width: 250px;
  height: 250px;
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;

export default Profile;
