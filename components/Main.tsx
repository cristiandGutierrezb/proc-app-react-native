import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function Main() {
  return (
    <View>
      <Text style={{color: 'white'}}>Main</Text>
      <Link href="/login">Login</Link>
    </View>
  )
}
