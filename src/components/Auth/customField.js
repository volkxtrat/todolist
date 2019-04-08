import React from "react";
import styled from "styled-components";
import { Input, Form, Label } from "semantic-ui-react";

const TextField = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.87rem;
`;

export const TexFieldFormikMui = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const currError = errors.hasOwnProperty(field.name);
  const currTouched = touched.hasOwnProperty(field.name);
  const isError = currTouched && currError;

  return (
    <Form.Field>
      <label>{label}</label>
      <Form.Input error={isError} {...field} {...props} />
    </Form.Field>
  );
};
