import { State } from 'types';

export const selectAuthState = (state: State) => state.auth;
export const selectUid = (state: State) => selectAuthState(state).uid;
