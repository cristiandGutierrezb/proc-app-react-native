import { View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Register() {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ marginTop: insets.top, marginBottom: insets.bottom, backgroundColor: 'black' }}>
      <Text style={{color: 'white'}}>Here is register</Text>
    </View>
  )
}
