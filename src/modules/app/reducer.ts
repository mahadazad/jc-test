import { State, Action, ActionType } from './types';

const initialState: State = {
  loading: false,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Action.UpdateLoading:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
