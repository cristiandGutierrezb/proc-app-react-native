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
            headerShown: false
          }}
        />
      </View>
    </SafeAreaProvider>
  )
}
