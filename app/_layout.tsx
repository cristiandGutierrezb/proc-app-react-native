import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

export default function Layout() {

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <View className='bg-slate-300 h-full'>
        <Stack 
          screenOptions={{
            headerStyle: { backgroundColor: '#CDCDCD' },
            headerTintColor: 'blue',
            headerTitle: 'My title',
            headerLeft: () => <Text>Left</Text>,
            headerRight: () => <Text>Right</Text>
          }}
        />
      </View>
    </SafeAreaProvider>
  )
}
