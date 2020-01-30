import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'file' | 'date' | 'number';
}

const Input: React.FC<Props> = ({
  label,
  name,
  placeholder,
  onChange: onChangeCustom,
  type = 'text',
}) => {
  const renderField = ({
    form: { setFieldValue },
    field: { onChange: onChangeFormik, ...field },
    meta,
  }: any) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.currentTarget?.files?.[0];

      if (file) {
        setFieldValue(name, file);
      } else {
        onChangeFormik(e);

        if (onChangeCustom) {
          onChangeCustom(e);
        }
      }
    };

    let value = type === 'file' ? undefined : field.value;

    const props = {
      type,
      name,
      hasError: meta.touched && meta.error,
      placeholder,
      onChange,
      ...field,
      value,
    };

    return (
      <>
        <InputField {...props} />
        {!!meta.error && meta.touched && <Error>{meta.error}</Error>}
      </>
    );
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Field name={name}>{renderField}</Field>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;
`;

const Error = styled.div`
  font-size: 0.8em;
  color: #f14668;
  margin-top: 5px;
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-weight: 700;
  margin-bottom: 12px;
`;

const InputField = styled.input<{ hasError: boolean }>`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  border: 1px solid ${({ hasError }) => (hasError ? '#f14668' : '#dbdbdb')};
  border-radius: 4px;
  padding: 12px 10px;
  width: 100%;

  &:focus {
    border: 1px solid ${({ hasError }) => (hasError ? '#f14668' : '#3273dc')};
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
`;

export default Input;
