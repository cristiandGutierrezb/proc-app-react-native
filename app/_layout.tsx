import { Slot } from "expo-router"
import { View, Text, StyleSheet } from "react-native"

export default function Layout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40
  }
})
