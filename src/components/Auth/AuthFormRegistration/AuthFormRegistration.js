import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Header, Button, Form, Message } from "semantic-ui-react";

import routesName from "../../../routes/routes";
import {
  itemsRegistration,
  getSchemaRegistration,
  controlName
} from "../constants";
import { StyledAuthForm, StyledFormLink } from "../styled";
import { TexFieldFormikMui } from "../customField";

const AuthFormRegistration = ({ error, userSignUp, onAuthReset }) => {
  useEffect(() => {
    return () => {
      if (error) onAuthReset();
    };
  }, []);
  return (
    <StyledAuthForm>
      <Formik
        initialValues={{
          [controlName.firstName]: "",
          [controlName.secondName]: "",
          [controlName.email]: "",
          [controlName.password]: ""
        }}
        validationSchema={getSchemaRegistration()}
        onSubmit={(values, actions) => {
          actions.resetForm();
          const userData = {
            displayName: `${values.firstName} ${values.secondName}`
          };
          userSignUp(values.email, values.password, userData);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" error={!!error}>
            <Form.Field>
              <Header as="h2">
                <FormattedMessage id="auth.title.registration" />
              </Header>
            </Form.Field>
            <Message
              error
              header={<FormattedMessage id="auth.error.signup" />}
              content={error}
            />
            {itemsRegistration.map(item => (
              <Field
                key={item.controlName}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.controlName}
                component={TexFieldFormikMui}
              />
            ))}
            <Form.Field>
              <Button
                fluid
                secondary
                type="submit"
                // disabled={regState.isLoading}
                // loading
              >
                <FormattedMessage id="auth.button.registration" />
              </Button>
            </Form.Field>
            <StyledFormLink>
              <p>
                <FormattedMessage id="auth.link.registration" />
              </p>
              <Link to={routesName.signIn}>
                <FormattedMessage id="auth.button.login" />
              </Link>
            </StyledFormLink>
          </Form>
        )}
      </Formik>
    </StyledAuthForm>
  );
};

export default AuthFormRegistration;
