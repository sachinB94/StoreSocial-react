import isString from 'lodash.isstring';
import isObject from 'lodash.isobject';

// Actions
export const SHOW_SUCCESS = 'app/auth/SHOW_SUCCESS';
export const SHOW_ERROR = 'app/auth/SHOW_ERROR';
export const HIDE_SNACKBAR = 'app/auth/HIDE_SNACKBAR';

// Reducer
const initialState = {
  snackbar: {
    open: false,
    message: '',
    status: 'success'
  }
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case SHOW_SUCCESS:
      return {
        ...state,
        snackbar: { open: true, message: data, status: 'success' }
      };
    case SHOW_ERROR: {
      let message;
      if (isString(data)) {
        message = data;
      } else if (isObject(data) && data.message) {
        message = data.message;
      } else {
        message = 'Something went wrong!';
      }
      return {
        ...state,
        snackbar: { message, open: true, status: 'error' }
      };
    }
    case HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: { open: false, message: '', status: 'success' }
      };
    default:
      return state;
  }
};

// Action Creators
export const showSuccess = message => ({ type: SHOW_SUCCESS, data: message });
export const showError = message => ({ type: SHOW_ERROR, data: message });
export const hideSnackbar = () => ({ type: HIDE_SNACKBAR });
