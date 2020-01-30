import { Action, UpdateLoadingAction } from './types';

export const updateLoading = (loading: boolean): UpdateLoadingAction => ({
  type: Action.UpdateLoading,
  loading,
});
