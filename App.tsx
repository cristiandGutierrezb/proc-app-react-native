import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Main from './components/screens/Main';

export default function App() {
  return (
    <View>
      <Main />
      <StatusBar style="light" />
    </View>
  );
}
