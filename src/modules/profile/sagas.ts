import { all, takeLatest, select, put } from 'redux-saga/effects';

import { updateLoading } from 'modules/app/actions';
import { selectUid } from 'modules/auth/selectors';
import * as actions from 'modules/profile/actions';
import * as api from 'api';

import { Action, UpdateProfileAction, Profile } from './types';

function* updateProfileWatcher() {
  yield takeLatest(Action.UpdateProfile, function*(action: UpdateProfileAction) {
    const uid = yield select(selectUid);

    yield put(updateLoading(true));
    let data: Profile | null = null;

    try {
      const { image, ...profile } = action.payload;

      if (uid) {
        if (image instanceof File) {
          const response = yield api.uploadImage(uid, image);

          if (response.state === 'success') {
            const url: string = yield response.ref.getDownloadURL();
            data = { image: url, ...profile };
          }
        } else {
          data = { image, ...profile };
        }

        if (data) {
          yield updateProfile(uid, data);
          yield put(actions.profileLoaded(data));
        }
      }
    } catch (e) {
    } finally {
      yield put(updateLoading(false));
    }
  });
}

function* updateProfile(uid: string, profile: Profile) {
  delete profile.password;
  yield api.saveProfile(uid, profile);
  yield put(actions.profileUpdated());
}

function* loadProfile() {
  yield takeLatest(Action.LoadProfile, function*() {
    const uid = yield select(selectUid);
    const profile = yield api.getProfile(uid);

    if (profile) {
      yield put(actions.profileLoaded(profile));
    }
  });
}

export default function*() {
  yield all([updateProfileWatcher(), loadProfile()]);
}
