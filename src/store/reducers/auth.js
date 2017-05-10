// Actions
export const SIGN_UP = 'app/auth/SIGN_UP';
export const SIGN_UP_SUCCESS = 'app/auth/SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'app/auth/SIGN_UP_FAIL';
export const SIGN_IN = 'app/auth/SIGN_IN';
export const SIGN_IN_SUCCESS = 'app/auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'app/auth/SIGN_IN_FAIL';
export const SIGN_OUT = 'app/auth/SIGN_OUT';

// Reducer
const initialState = {
  isLoggedIn: false,
  signingUp: false,
  signingIn: false
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SIGN_UP:
      return { ...state, signingUp: true };
    case SIGN_UP_SUCCESS:
      return { ...state, signingUp: false, isLoggedIn: true };
    case SIGN_UP_FAIL:
      return { ...state, signingUp: false, isLoggedIn: false };
    case SIGN_IN:
      return { ...state, signingIn: true };
    case SIGN_IN_SUCCESS:
      return { ...state, signingIn: false, isLoggedIn: true };
    case SIGN_IN_FAIL:
      return { ...state, signingIn: false, isLoggedIn: false };
    case SIGN_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

// Action Creators
export const signup = user => ({ type: SIGN_UP, data: { user } });
export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signupFail = () => ({ type: SIGN_UP_FAIL });
export const signin = user => ({ type: SIGN_IN, data: { user } });
export const signinSuccess = () => ({ type: SIGN_IN_SUCCESS });
export const signinFail = () => ({ type: SIGN_IN_FAIL });
export const signout = () => ({ type: SIGN_OUT });
