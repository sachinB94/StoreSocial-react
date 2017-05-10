import { takeEvery } from 'redux-saga/effects';

import { SIGN_UP, SIGN_IN, SIGN_OUT } from '../reducers/auth';
import { signupWatcher, signinWatcher, signoutWatcher } from './auth';

import { CURRENT_USER } from '../reducers/user';
import { currentUserWatcher } from './user';

import {
  CONTACT_LIST,
  SUBMIT_CONTACT,
  DELETE_CONTACT
} from '../reducers/contact';
import {
  contactListWatcher,
  submitContactWatcher,
  deleteContactWatcher
} from './contact';

export default function* rootSaga() {
  yield [
    takeEvery(SIGN_UP, signupWatcher),
    takeEvery(SIGN_IN, signinWatcher),
    takeEvery(SIGN_OUT, signoutWatcher),
    takeEvery(CURRENT_USER, currentUserWatcher),
    takeEvery(CONTACT_LIST, contactListWatcher),
    takeEvery(SUBMIT_CONTACT, submitContactWatcher),
    takeEvery(DELETE_CONTACT, deleteContactWatcher)
  ];
}
