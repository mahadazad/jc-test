import { all, put, takeLatest, take } from 'redux-saga/effects';

import { updateLoading } from 'modules/app/actions';
import { updateProfile, loadProfile, profileLoaded } from 'modules/profile/actions';
import * as api from 'api';
import navigation from 'navigation';

import { Action, RegisterAction, LoginSuccessAction, LoginAction } from './types';
import * as actions from './actions';

function* register() {
  yield takeLatest(Action.Register, function*(action: RegisterAction) {
    try {
      yield put(updateLoading(true));

      const uid = yield api.register(action.payload.email, action.payload.password);

      if (uid) {
        yield put(actions.loginSuccess(uid));
        yield put(profileLoaded(action.payload));
        navigation.push('/profile');
        yield put(updateProfile(action.payload));
      }
    } catch (e) {
      yield put(updateLoading(false));
      alert(e.message);
    }
  });
}

function* login() {
  yield takeLatest(Action.Login, function*(action: LoginAction) {
    try {
      yield put(updateLoading(true));

      const uid = yield api.login(action.payload.email, action.payload.password);
      if (uid) {
        yield put(actions.loginSuccess(uid));
        yield take(Action.LoginComplete);
        navigation.push('/profile');
      }
    } catch (e) {
      yield put(updateLoading(false));
      alert('Invalid credentials!');
    }
  });
}

function* loginSuccess() {
  yield takeLatest(Action.LoginSuccess, function*({ uid }: LoginSuccessAction) {
    localStorage.setItem('uid', uid);
    yield put(loadProfile());
    yield put(updateLoading(false));
    yield put(actions.loginComplete());
  });
}

function* logout() {
  yield takeLatest(Action.Logout, function() {
    try {
      localStorage.removeItem('uid');
      api.logout();
      navigation.replace('/');
    } catch (e) {}
  });
}

export default function*() {
  yield all([register(), login(), loginSuccess(), logout()]);
}
