import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function ProfileScreen({route, navigation}: Props) {
  // ...
}
