import { ActionType } from 'types';
import { Action as AuthAction } from 'modules/auth/types';

import { State, Action } from './types';

const initialState: State = {
  profile: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Action.ProfileLoaded:
      return {
        ...state,
        profile: action.profile,
      };
    case AuthAction.Logout:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};
