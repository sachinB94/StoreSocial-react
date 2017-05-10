// Actions
export const SET_USER = 'app/user/SET_USER';
export const CURRENT_USER = 'app/user/CURRENT_USER';

// Reducer
const initialState = {
  name: null,
  email: null
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case SET_USER:
      return { ...state, name: data.name, email: data.email };
    default:
      return state;
  }
};

// Action Creators
export const setUser = user => ({ type: SET_USER, data: user });
export const currentUser = () => ({ type: CURRENT_USER });
