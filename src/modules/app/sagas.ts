import { all, put, take } from 'redux-saga/effects';

import { Action } from 'modules/auth/types';
import { loginSuccess } from 'modules/auth/actions';
import navigation from 'navigation';

export function* init() {
  const uid = localStorage.getItem('uid');

  if (uid) {
    yield put(loginSuccess(uid));
    yield take(Action.LoginComplete);
    navigation.push('/profile');
  }
}

export default function*() {
  yield all([init()]);
}
