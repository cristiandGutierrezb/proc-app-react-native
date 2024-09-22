import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native"

import { inputFormStyle, linkStyle, standardButton, standardTitle } from "../tokens";
import { Link } from "expo-router";

import { Footer } from "../";

export default function Register() {
  return (
    <View className="h-full flex justify-between">
      <Text className={`${standardTitle} mt-10`}>Crear Cuenta</Text>
      <View className="p-6">
        <TextInput className={`${inputFormStyle}`} placeholder="Nombre" placeholderTextColor="#aaa" />
        <TextInput className={`${inputFormStyle}`} placeholder="Email" placeholderTextColor="#aaa" />
        <TextInput className={`${inputFormStyle}`} placeholder="Contraseña" placeholderTextColor="#aaa" secureTextEntry={true} />
        <TextInput className={`${inputFormStyle}`} placeholder="Confirmar Contraseña" placeholderTextColor="#aaa" secureTextEntry={true} />
        
        <Pressable className={`${standardButton} mt-5`}>
          <Text className="text-white">Registrarse</Text>
        </Pressable>

        <View>
          <Text className="text-[#555] text-center mt-4">¿Ya tienes cuenta? <Link className={`${linkStyle}`} href='/login'>Inicia sesión</Link></Text>
        </View>
      </View>
      <Footer />
    </View>
  )
}
