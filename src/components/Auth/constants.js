import React from "react";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";
import { Input } from "semantic-ui-react";

export const controlName = {
  firstName: "firstName",
  secondName: "secondName",
  email: "email",
  password: "password"
};

export const itemsLogin = [
  {
    controlName: controlName.email,
    label: <FormattedMessage id="auth.label.email" />,
    placeholder: "example@gmail.com",
    type: "text"
  },
  {
    controlName: controlName.password,
    label: <FormattedMessage id="auth.label.password" />,
    placeholder: "******",
    type: "password"
  }
];

export const itemsRegistration = [
  {
    controlName: controlName.firstName,
    label: <FormattedMessage id="auth.label.firstName" />,
    placeholder: "Ivan",
    type: "text"
  },
  {
    controlName: controlName.secondName,
    label: <FormattedMessage id="auth.label.secondName" />,
    placeholder: "Ivanov",
    type: "text"
  },
  ...itemsLogin
];

const loginSchema = {
  [controlName.email]: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />),
  [controlName.password]: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .min(
      6,
      <FormattedMessage id="validation.password.min" values={{ count: 6 }} />
    )
    .matches(/[a-zA-Z]/, <FormattedMessage id="validation.password.latin" />)
    .matches(
      /(?=.*[A-Z])/,
      <FormattedMessage id="validation.password.capital" />
    )
    .matches(/(?=.*[\d])/, <FormattedMessage id="validation.password.number" />)
};

export function getSchemaRegistration() {
  return Yup.object().shape({
    [controlName.firstName]: Yup.string().required(
      <FormattedMessage id="validation.required" />
    ),
    [controlName.secondName]: Yup.string().required(
      <FormattedMessage id="validation.required" />
    ),
    ...loginSchema
  });
}

export function getSchemaLogin() {
  return Yup.object().shape({
    ...loginSchema
  });
}