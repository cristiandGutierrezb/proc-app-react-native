import { Slot } from "expo-router"
import { View } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

export default function Layout() {

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <View>
        <Slot />
      </View>
    </SafeAreaProvider>
  )
}
