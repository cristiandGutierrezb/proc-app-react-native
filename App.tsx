import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo'

import Main from './components/screens/Main';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state.isConnected
        ? alert('Is connected')
        : alert('Is not connected')
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <View>
      <Main />
      <StatusBar style="dark" />
    </View>
  );
}
