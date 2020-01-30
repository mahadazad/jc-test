import {
  Profile,
  Action,
  UpdateProfileAction,
  ProfileLoadedAction,
  ProfileUpdatedAction,
  LoadProfileAction,
} from './types';

export const updateProfile = (payload: Profile): UpdateProfileAction => ({
  type: Action.UpdateProfile,
  payload,
});

export const profileUpdated = (): ProfileUpdatedAction => ({
  type: Action.ProfileUpdated,
});

export const loadProfile = (): LoadProfileAction => ({
  type: Action.LoadProfile,
});

export const profileLoaded = (profile: Profile): ProfileLoadedAction => ({
  type: Action.ProfileLoaded,
  profile,
});
