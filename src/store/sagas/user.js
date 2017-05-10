import { put, call } from 'redux-saga/effects';

import { setUser } from '../reducers/user';

import { current } from '../../api/user';

export function* currentUserWatcher() {
  const { res } = yield call(current);

  if (res) {
    yield put(setUser(res));
  }
}
