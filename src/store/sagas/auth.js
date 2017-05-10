import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { setUser } from '../reducers/user';
import {
  signupSuccess,
  signupFail,
  signinSuccess,
  signinFail
} from '../reducers/auth';
import { showError } from '../reducers/utils';

import { signup, signin } from '../../api/user';

import { setToken, removeToken } from '../../utils/storage';

export function* signupWatcher({ data }) {
  const { user } = data;

  const { res, err } = yield call(signup, user);

  if (res) {
    setToken(res.token);
    yield put(signupSuccess());
    yield put(setUser(res.user));
    yield put(push('/dashboard'));
  } else {
    yield put(signupFail());
    yield put(showError(err));
  }
}

export function* signinWatcher({ data }) {
  const { user } = data;

  const { res, err } = yield call(signin, user);

  if (res) {
    setToken(res.token);
    yield put(signinSuccess());
    yield put(setUser(res.user));
    yield put(push('/dashboard'));
  } else {
    yield put(signinFail());
    yield put(showError(err));
  }
}

export function* signoutWatcher() {
  removeToken();
  yield put(push('/'));
}
