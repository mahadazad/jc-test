import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import Input from 'components/Input';
import Button from 'components/Button';
import PageHeading from 'components/PageHeading';
import * as authActions from 'modules/auth/actions';
import { selectUid } from 'modules/auth/selectors';
import { newSchema, editSchema, secretQuestions } from 'modules/profile/types';
import { updateProfile } from 'modules/profile/actions';
import { selectProfile } from 'modules/profile/selectors';

const SaveProfile: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const uid = useSelector(selectUid);

  return (
    <Container>
      <PageHeading>Profile</PageHeading>
      <Formik
        initialValues={{
          email: '',
          password: '',
          phoneNumber: '',
          address: '',
          dateOfBirth: '',
          question1: '',
          question2: '',
          question3: '',
          ...profile,
        }}
        validationSchema={uid ? editSchema : newSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (uid) {
            dispatch(updateProfile(values));
          } else {
            dispatch(authActions.register(values));
          }
          setSubmitting(false);
        }}>
        <Form>
          <Input label="Profile Image" name="image" type="file" />
          <Input label="E-mail" name="email" />
          {!uid && <Input label="Password" type="password" name="password" />}
          <Input label="Phone Number" name="phoneNumber" />
          <Input label="Address" name="address" />
          <Input label="Date of Birth" name="dateOfBirth" />
          {secretQuestions.map((data, key) => (
            <Input key={key} label={data.question} name={data.key} />
          ))}
          <Button title="Submit" type="submit" />
        </Form>
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export default SaveProfile;
