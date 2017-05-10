import { put, call, select } from 'redux-saga/effects';

import {
  contactListSuccess,
  contactListFail,
  submitContactSuccess,
  submitContactFail,
  deleteContactSuccess,
  deleteContactFail
} from '../reducers/contact';
import { contactSelector } from '../selectors/contact';
import { showError } from '../reducers/utils';

import {
  addContact,
  getContacts,
  editContact,
  deleteContact
} from '../../api/contact';

export function* contactListWatcher() {
  const { res, err } = yield call(getContacts);

  if (res) {
    yield put(contactListSuccess(res));
  } else {
    yield put(contactListFail());
    yield put(showError(err));
  }
}

export function* submitContactWatcher({ data }) {
  const { contact } = data;

  const { operation } = yield select(contactSelector);

  if (operation === 'ADD') {
    const { res, err } = yield call(addContact, contact);

    if (res) {
      yield put(submitContactSuccess(res));
    } else {
      yield put(submitContactFail());
      yield put(showError(err));
    }
  } else if (operation === 'EDIT') {
    const { res, err } = yield call(editContact, contact._id, contact);

    if (res) {
      yield put(submitContactSuccess(res));
    } else {
      yield put(submitContactFail());
      yield put(showError(err));
    }
  }
}

export function* deleteContactWatcher() {
  const { selected } = yield select(contactSelector);

  const { err } = yield call(deleteContact, selected);

  if (!err) {
    yield put(deleteContactSuccess());
  } else {
    yield put(deleteContactFail());
    yield put(showError(err));
  }
}
