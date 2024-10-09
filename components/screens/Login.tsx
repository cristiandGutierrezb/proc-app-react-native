import { useState } from "react"
import { View, TextInput, Pressable, Text } from "react-native"
import { Link, useRouter } from "expo-router"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

import { UserIcon, Footer } from "../"

import * as Tokens from '../tokens'
import { LoginScheme } from "../../schemes/loginScheme";

export default function Login() {

  const router = useRouter()
  
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginScheme)
  })

  const onSubmit = (data: any) => console.log(data)

  const onPressLogin = () => {
    router.push('/account')
  }

  return (
    <View className="h-full flex justify-between">
      <View className={`flex justify-center items-center mt-20 w-36 h-36 rounded-full mx-auto bg-slate-200 ${Tokens.shadowStandard}`}>
        <UserIcon size={Tokens.bigSizeIcon} color="black" />
      </View>
      <View className="p-6">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={`${Tokens.inputFormStyle}`} 
              placeholder="User" 
              placeholderTextColor="#aaa"
              onChangeText={setUser}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={`${Tokens.inputFormStyle}`} 
              placeholder="Password" 
              placeholderTextColor="#aaa" 
              secureTextEntry={true}
              onChangeText={setPass}
            />
          )}
          name="lastName"
        />
        <Pressable onPress={onPressLogin} className={`${Tokens.standardButton} mt-5 `}>
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
