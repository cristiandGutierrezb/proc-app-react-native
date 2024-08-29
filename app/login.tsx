import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"


export default function login() {
  return (
    <View style={styles.container}>
      <Text>This is the login</Text>
      <Link href='/'>
        Go to home!
      </Link>
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