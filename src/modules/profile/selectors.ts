import { State } from 'types';

export const selectProfileState = (state: State) => state.profile;
export const selectProfile = (state: State) => selectProfileState(state).profile;
