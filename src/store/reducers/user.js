import {
  AUTH_LOGOUT,
  SIGNUP_SUCCESS,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_RESET
} from "../actions/actionTypes";

const initialState = {
  token: null,
  isLoading: false,
  isRegistration: false
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isLoading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload.userData,
        isLoading: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        isLoading: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...initialState,
        isRegistration: true
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case AUTH_RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
