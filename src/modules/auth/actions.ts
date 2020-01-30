import {
  RegisterAction,
  LoginAction,
  Action,
  LoginSuccessAction,
  LoginCompleteAction,
  LogoutAction,
} from './types';

export const register = (payload: RegisterAction['payload']): RegisterAction => ({
  type: Action.Register,
  payload,
});

export const login = (payload: LoginAction['payload']): LoginAction => ({
  type: Action.Login,
  payload,
});

export const loginSuccess = (uid: string): LoginSuccessAction => ({
  type: Action.LoginSuccess,
  uid,
});

export const loginComplete = (): LoginCompleteAction => ({
  type: Action.LoginComplete,
});

export const logout = (): LogoutAction => ({
  type: Action.Logout,
});
