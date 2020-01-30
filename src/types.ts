import { State as AppState, ActionType as AppActions } from 'modules/app/types';
import { State as AuthState, ActionType as AuthActions } from 'modules/auth/types';
import { State as ProfileState, ActionType as ProfileActions } from 'modules/profile/types';

export interface State {
  app: AppState;
  auth: AuthState;
  profile: ProfileState;
}

export type ActionType = AppActions | AuthActions | ProfileActions;
