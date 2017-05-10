// Actions
export const CONTACT_LIST = 'app/contact/CONTACT_LIST';
export const CONTACT_LIST_SUCCESS = 'app/contact/CONTACT_LIST_SUCCESS';
export const CONTACT_LIST_FAIL = 'app/contact/CONTACT_LIST_FAIL';
export const SELECT_CONTACT = 'app/contact/SELECT_CONTACT';
export const ADD_CLICK = 'app/contact/ADD_CLICK';
export const EDIT_CLICK = 'app/contact/EDIT_CLICK';
export const SUBMIT_CONTACT = 'app/contact/SUBMIT_CONTACT';
export const SUBMIT_CONTACT_SUCCESS = 'app/contact/SUBMIT_CONTACT_SUCCESS';
export const SUBMIT_CONTACT_FAIL = 'app/contact/SUBMIT_CONTACT_FAIL';
export const CANCEL = 'app/contact/CANCEL';
export const DELETE_CONTACT = 'app/contact/DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'app/contact/DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAIL = 'app/contact/DELETE_CONTACT_FAIL';

// Reducer
const initialState = {
  list: [],
  selected: null,
  operation: null,
  loading: false,
  submitting: false
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case CONTACT_LIST:
      return { ...state, loading: true };
    case CONTACT_LIST_SUCCESS:
      return { ...state, loading: false, list: data };
    case CONTACT_LIST_FAIL:
      return { ...state, loading: false, list: [] };
    case SELECT_CONTACT:
      return { ...state, selected: data, operation: 'VIEW' };
    case ADD_CLICK:
      return { ...state, selected: null, operation: 'ADD' };
    case EDIT_CLICK:
      return { ...state, operation: 'EDIT' };
    case SUBMIT_CONTACT:
      return { ...state, submitting: true };
    case SUBMIT_CONTACT_SUCCESS:
      return {
        ...state,
        submitting: false,
        list: state.operation === 'ADD'
          ? state.list.concat([data])
          : state.list.map(c => c._id === data._id ? data : c),
        operation: 'VIEW',
        selected: data._id
      };
    case SUBMIT_CONTACT_FAIL:
      return { ...state, submitting: false };
    case DELETE_CONTACT:
      return { ...state, submitting: true };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        submitting: false,
        list: state.list.filter(({ _id }) => _id !== state.selected),
        operation: 'VIEW',
        selected: null
      };
    case DELETE_CONTACT_FAIL:
      return { ...state, submitting: false };
    case CANCEL:
      return { ...state, operation: state.selected ? 'VIEW' : null };
    default:
      return state;
  }
};

// Action Creators
export const contactList = () => ({ type: CONTACT_LIST });
export const contactListSuccess = list => ({
  type: CONTACT_LIST_SUCCESS,
  data: list
});
export const contactListFail = () => ({ type: CONTACT_LIST_FAIL });
export const selectContact = id => ({ type: SELECT_CONTACT, data: id });
export const addClick = () => ({ type: ADD_CLICK });
export const editClick = () => ({ type: EDIT_CLICK });
export const submitContact = contact => ({
  type: SUBMIT_CONTACT,
  data: { contact }
});
export const submitContactSuccess = list => ({
  type: SUBMIT_CONTACT_SUCCESS,
  data: list
});
export const submitContactFail = () => ({ type: SUBMIT_CONTACT_FAIL });
export const deleteContact = () => ({ type: DELETE_CONTACT });
export const deleteContactSuccess = () => ({ type: DELETE_CONTACT_SUCCESS });
export const deleteContactFail = () => ({ type: DELETE_CONTACT_FAIL });
export const cancel = () => ({ type: CANCEL });
