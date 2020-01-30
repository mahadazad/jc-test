import { all } from 'redux-saga/effects';

import app from 'modules/app/sagas';
import auth from 'modules/auth/sagas';
import profile from 'modules/profile/sagas';

export default function* rootSaga() {
  yield all([app(), auth(), profile()]);
}
