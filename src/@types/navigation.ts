// import {SCREENS} from '../utils/enums';

// export type LoggedInStackParamList = {
//   [SCREENS.LOGIN_SCREEN]: {
//     userId: string;
//     name: string;
//     email: string;
//     password: string;
//   };
// };

import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
