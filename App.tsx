import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import {Provider} from 'react-redux';
import {SCREENS} from './src/utils/enums';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    textColor: isDarkMode ? '#fff' : '#000',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.textColor,
          },
        })}>
        <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
