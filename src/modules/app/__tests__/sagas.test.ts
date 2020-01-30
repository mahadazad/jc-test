/* eslint-disable */
jest.mock('../../../navigation');

import { put, take } from 'redux-saga/effects';

import { loginSuccess } from '../../../modules/auth/actions';
import { init } from '../sagas';
import { Action } from '../../auth/types';
import navigation from '../../../navigation';

it('should check login on init', () => {
  jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('123');
  const initSaga = init();
  expect(initSaga.next().value).toEqual(put(loginSuccess('123')));
  expect(initSaga.next().value).toEqual(take(Action.LoginComplete));
  initSaga.next();
  expect(navigation.push).toHaveBeenCalledWith('/profile');
});
