import { combineReducers } from 'redux';

import app from 'modules/app/reducer';
import auth from 'modules/auth/reducer';
import profile from 'modules/profile/reducer';
import { State } from 'types';

const state: { [key in keyof State]: any } = { auth, app, profile };

const reducer = combineReducers(state);

export default reducer;
