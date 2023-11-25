import {SafeAreaProvider} from 'react-native-safe-area-context';
// import fonts from './config/fonts';

import Navigation from './src/navigator/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
