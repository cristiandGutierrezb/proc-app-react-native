import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

import { UserIcon, Footer } from "../"

import * as Tokens from '../tokens'

export default function Login() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View className="h-full flex justify-between">
      <View className={`flex justify-center items-center mt-20 w-36 h-36 rounded-full mx-auto bg-slate-200 ${Tokens.shadowStandard}`}>
        <UserIcon size={Tokens.bigSizeIcon} color="black" />
      </View>
      <View className="h-[50%]">
        <Text className="w-[80%] mx-auto text-3xl font-semibold">User</Text>
        <TextInput 
          className={`${Tokens.standardInput}`}
          onChangeText={setUser}
        />
        <Text className="w-[80%] mx-auto text-3xl mt-5 font-semibold">Password</Text>
        <TextInput
          className={`${Tokens.standardInput}`}
          onChangeText={setPass}
        />
      </View>
      <Footer />
    </View>
  )
}
