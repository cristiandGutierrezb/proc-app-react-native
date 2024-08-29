import { Slot } from "expo-router"
import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View>
        <Slot />
      </View>
    </SafeAreaProvider>
  )
}
