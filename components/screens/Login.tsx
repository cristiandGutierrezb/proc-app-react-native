import { View, Text, TextInput, StyleSheet } from "react-native"
import { UserIcon } from "../atoms/icons"
import { useState } from "react"

export default function Login() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View>
      <UserIcon size={80} color="black" />
      <View>
        <Text style={styles.text}>User</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setUser}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setPass}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black'
  },
  form: {

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 50,
    backgroundColor: 'white'
  },
});
