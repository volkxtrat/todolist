import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import routesName from "../../../routes/routes";
import { StyledAuthForm, StyledFormLink } from "../styled";
import { getSchemaLogin, controlName, itemsLogin } from "../constants";

import { Formik, Field } from "formik";
import { FormattedMessage } from "react-intl";
import { Header, Message, Button, Form } from "semantic-ui-react";
import { TexFieldFormikMui } from "../customField";

const AuthFormLogin = ({ userSignIn, error, isRegistration, onAuthReset }) => {
  useEffect(() => {
    // console.log("mount");
    return () => {
      if (error) onAuthReset();
    };
  }, []);
  return (
    <StyledAuthForm>
      <Formik
        initialValues={{
          [controlName.email]: "",
          [controlName.password]: ""
        }}
        validationSchema={getSchemaLogin()}
        onSubmit={values => {
          userSignIn(values.email, values.password);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete="off"
            success={isRegistration}
            error={!!error}
          >
            <Form.Field>
              <Header as="h2">
                <FormattedMessage id="auth.title.login" />
              </Header>
            </Form.Field>
            <Message
              error
              header={<FormattedMessage id="auth.error.signin" />}
              content={error}
            />
            <Message
              success
              header={<FormattedMessage id="auth.success.head" />}
              content={<FormattedMessage id="auth.success.content" />}
            />
            {itemsLogin.map(item => (
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
                // disabled={loginState.isLoading}
              >
                <FormattedMessage id="auth.button.login" />
              </Button>
            </Form.Field>
            <Form.Field>
              <Button color="google plus" fluid type="button">
                <FormattedMessage id="auth.button.google" />
              </Button>
            </Form.Field>
            <StyledFormLink>
              <p>
                <FormattedMessage id="auth.link.login" />
              </p>
              <Link to={routesName.signUp}>
                <FormattedMessage id="auth.button.registration" />
              </Link>
            </StyledFormLink>
          </Form>
        )}
      </Formik>
    </StyledAuthForm>
  );
};

AuthFormLogin.propsTypes = {
  onSubmit: PropTypes.func
};
AuthFormLogin.defaultProps = {};

export default AuthFormLogin;
