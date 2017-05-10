import { put, select } from 'redux-saga/effects';

import {
  contactListSuccess,
  contactListFail,
  submitContactSuccess,
  submitContactFail
} from '../reducers/contact';
import { contactSelector } from '../selectors/contact';
import { showError } from '../reducers/utils';

import demoList from './demoContactList';

export function* contactListWatcher() {
  const { res, err } = { res: demoList };
  // const { res, err } = { err: { status: 400, message: 'This is an error' } };

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
    const { res, err } = { res: { ...contact, _id: 'added_id' } };
    // const { res, err } = { err: { status: 500, message: 'This is an error' } };

    if (res) {
      yield put(submitContactSuccess(res));
    } else {
      yield put(submitContactFail());
      yield put(showError(err));
    }
  } else if (operation === 'EDIT') {
    const { res, err } = { res: contact };
    // const { res, err } = { err: { status: 500, message: 'This is an error' } };

    if (res) {
      yield put(submitContactSuccess(res));
    } else {
      yield put(submitContactFail());
      yield put(showError(err));
    }
  }
}
