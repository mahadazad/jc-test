import * as Yup from 'yup';

export enum Action {
  UpdateProfile = 'UpdateProfile',
  ProfileUpdated = 'ProfileUpdated',
  LoadProfile = 'LoadProfile',
  ProfileLoaded = 'ProfileLoaded',
}

export type UpdateProfileAction = {
  type: Action.UpdateProfile;
  payload: Profile;
};

export type ProfileUpdatedAction = {
  type: Action.ProfileUpdated;
};

export type LoadProfileAction = {
  type: Action.LoadProfile;
};

export type ProfileLoadedAction = {
  type: Action.ProfileLoaded;
  profile: Profile;
};

export type ActionType =
  | UpdateProfileAction
  | ProfileUpdatedAction
  | LoadProfileAction
  | ProfileLoadedAction;

export interface Profile {
  image?: File | string | null;
  phoneNumber: string;
  address: string;
  email: string;
  password: string;
  dateOfBirth: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface State {
  profile: Profile | null;
}

const schema = {
  image: Yup.mixed()
    .required('Required')
    .test(
      'fileFormat',
      'Unsupported File Format',
      value =>
        !value ||
        typeof value === 'string' ||
        (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)),
    ),
  phoneNumber: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  password: Yup.string()
    .min(6)
    .required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  dateOfBirth: Yup.string().required('Required'),
  question1: Yup.string().required('Required'),
  question2: Yup.string().required('Required'),
  question3: Yup.string().required('Required'),
};

export const newSchema = Yup.object(schema);
export const editSchema = Yup.object({
  ...schema,
  password: schema.password.notRequired(),
  image: schema.image.notRequired(),
});

export const secretQuestions: {
  question: string;
  key: keyof Profile;
}[] = [
  { question: 'What is your city of birth?', key: 'question1' },
  { question: 'What is the name of your childhood friend?', key: 'question2' },
  { question: 'What is your favourite color?', key: 'question3' },
];
