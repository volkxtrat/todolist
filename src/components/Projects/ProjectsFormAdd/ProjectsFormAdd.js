import React from "react";
import PropTypes from "prop-types";
import { ClickAwayListener } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { ProjectAddFormik } from "./customField";

import * as Yup from "yup";

function getSchemaValidation(match) {
  return Yup.object().shape({
    name: Yup.string()
      .notOneOf(match, "Matched!")
      .required("Required")
  });
}

export default function ProjectsFormAdd({ fetch, handleClose, value, oneOf }) {
  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={handleClose}>
      <Formik
        initialValues={{
          name: value
        }}
        validationSchema={getSchemaValidation(oneOf)}
        onSubmit={values => {
          handleClose();
          fetch(values.name);
        }}
      >
        <Form autoComplete="off">
          <Field name="name" type="text" component={ProjectAddFormik} />
        </Form>
      </Formik>
    </ClickAwayListener>
  );
}

ProjectsFormAdd.propTypes = {
  fetch: PropTypes.func,
  handleClose: PropTypes.func,
  value: PropTypes.string,
  oneOf: PropTypes.array
};
ProjectsFormAdd.defaultProps = {
  value: ""
};
