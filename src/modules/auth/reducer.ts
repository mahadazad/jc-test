import { ActionType, Action, State } from './types';

const initialState: State = {
  uid: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Action.LoginSuccess:
      return {
        ...state,
        uid: action.uid,
      };
    case Action.Logout:
      return {
        ...state,
        uid: null,
      };
    default:
      return state;
  }
};
