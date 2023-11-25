import {SCREENS} from '../utils/enums';

export type LoggedInStackParamList = {
  [SCREENS.LOGIN_SCREEN]: {
    userId: string;
    name: string;
    email: string;
    password: string;
  };
};
