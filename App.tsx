import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Main from './components/screens/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  }
});
