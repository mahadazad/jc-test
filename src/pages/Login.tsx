import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from 'components/Input';
import Button from 'components/Button';
import PageHeading from 'components/PageHeading';
import * as authActions from 'modules/auth/actions';

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string()
    .min(6)
    .required('Required'),
});

const Register: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <PageHeading>Login</PageHeading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(authActions.login(values));
          setSubmitting(false);
        }}>
        <Form>
          <Input label="E-mail" name="email" />
          <Input label="Password" type="password" name="password" />
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

export default Register;
