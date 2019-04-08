import axios from "axios";
import React from "react";

import myAxios from "../../axios/axiosApp";

import {
  AUTH_LOGOUT,
  SIGNUP_SUCCESS,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_RESET
} from "./actionTypes";
import { FormattedMessage } from "react-intl";

const signupApi =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBORBJ3PhtsovjYLJF8vkABypz_l44miqo";
const signinApi =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBORBJ3PhtsovjYLJF8vkABypz_l44miqo";

export function signUp(email, password, userData) {
  return dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(signupApi, authData)
      .then(res => {
        const data = res.data;
        myAxios.put(
          `/users/${data.localId}.json?auth=${data.idToken}`,
          userData
        );
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(error => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}

export function signIn(email, password) {
  return dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(signinApi, authData)
      .then(res => {
        const data = res.data;

        const expirationDate = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );

        localStorage.setItem("token", data.idToken);
        localStorage.setItem("userId", data.localId);
        localStorage.setItem("expirationDate", expirationDate);

        dispatch(authStart(data.idToken, data.localId));
        dispatch(autoLogout(data.expiresIn));
      })
      .catch(error => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}

export function authSuccess() {
  return async (dispatch, getState) => {
    const userId = getState().user.userId;
    const token = getState().user.token;
    const response = await myAxios.get(`/users/${userId}.json?auth=${token}`);
    const userData = response.data;
    dispatch({ type: AUTH_SUCCESS, payload: { userData } });
  };
}

function authError(errorCode) {
  let error = "";
  switch (errorCode) {
    case "EMAIL_EXISTS": {
      error = <FormattedMessage id="auth.error.EMAIL_EXISTS" />;
      break;
    }
    case "EMAIL_NOT_FOUND": {
      error = <FormattedMessage id="auth.error.EMAIL_NOT_FOUND" />;
      break;
    }
    case "INVALID_PASSWORD": {
      error = <FormattedMessage id="auth.error.INVALID_PASSWORD" />;
      break;
    }
    case "USER_DISABLED": {
      error = <FormattedMessage id="auth.error.USER_DISABLED" />;
      break;
    }
    default:
      error = "Error";
      break;
  }
  console.log(error);
  return {
    type: AUTH_ERROR,
    payload: { error }
  };
}

export function authReset() {
  return dispath => {
    dispath({ type: AUTH_RESET });
  };
}

export function authStart(token, userId) {
  return {
    type: AUTH_START,
    payload: { token, userId }
  };
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, time * 1000);
  };
}

export function authLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT
  };
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authStart(token, userId));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
        // dispatch(authSuccess());
      }
    }
  };
}
