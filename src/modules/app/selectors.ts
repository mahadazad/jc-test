import { State } from 'types';

export const selectAppState = (state: State) => state.app;
export const selectLoading = (state: State) => selectAppState(state).loading;
