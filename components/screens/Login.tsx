import { useState } from "react"
import { View, TextInput, Pressable, Text } from "react-native"

import { UserIcon, Footer } from "../"

import * as Tokens from '../tokens'
import { Link, Stack } from "expo-router"

export default function Login() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View className="h-full flex justify-between">
      <View className={`flex justify-center items-center mt-20 w-36 h-36 rounded-full mx-auto bg-slate-200 ${Tokens.shadowStandard}`}>
        <UserIcon size={Tokens.bigSizeIcon} color="black" />
      </View>
      <View className="p-6">
        <TextInput 
          className={`${Tokens.inputFormStyle}`} 
          placeholder="User" 
          placeholderTextColor="#aaa"
          onChangeText={setUser}
        />
        <TextInput 
          className={`${Tokens.inputFormStyle}`} 
          placeholder="Password" 
          placeholderTextColor="#aaa" 
          secureTextEntry={true}
          onChangeText={setPass}
        />
        <Pressable className={`${Tokens.standardButton} mt-5`}>
          <Text className="text-white">Login</Text>
        </Pressable>
        <View>
          <Text className="text-[#555] text-center mt-4">¿Aun no tienes cuenta? <Link className={`${Tokens.linkStyle}`} href='/register'>Registrate aquí</Link></Text>
        </View>
      </View>
      <Footer />
    </View>
  )
}
