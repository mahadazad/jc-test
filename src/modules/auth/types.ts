import { Profile } from 'modules/profile/types';

export enum Action {
  Register = 'Register',
  Login = 'Login',
  LoginSuccess = 'LoginSuccess',
  LoginComplete = 'LoginComplete',
  Logout = 'Logout',
}

export type RegisterAction = {
  type: Action.Register;
  payload: Profile;
};

export type LoginAction = {
  type: Action.Login;
  payload: { email: string; password: string };
};

export type LogoutAction = {
  type: Action.Logout;
};

export type LoginSuccessAction = { type: Action.LoginSuccess; uid: string };
export type LoginCompleteAction = { type: Action.LoginComplete };

export type ActionType =
  | RegisterAction
  | LoginAction
  | LoginSuccessAction
  | LoginCompleteAction
  | LogoutAction;

export interface State {
  uid?: string | null;
}
