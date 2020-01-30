export enum Action {
  UpdateLoading = 'UpdateLoading',
}

export type UpdateLoadingAction = {
  type: Action.UpdateLoading;
  loading: boolean;
};

export type ActionType = UpdateLoadingAction;

export interface State {
  loading: false;
}
