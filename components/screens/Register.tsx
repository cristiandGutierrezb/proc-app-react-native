import { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  Alert, 
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet
} from "react-native"
import { Link } from "expo-router";

import { createUser } from "../../lib/api_general";

import { inputFormStyle, linkStyle, standardButton, standardTitle } from "../tokens";

import { Footer } from "../";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const body = {
    name,
    email,
    user,
    password
  }

  const onCreate = () => {
    setIsLoading(true)
    createUser(body)
    .then(() => {
      Alert.alert('Usuario creado con exito!')
    })
    .catch((e) => {
      Alert.alert('Error al crear el usuario')
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Diferente comportamiento en iOS vs Android
    >
      <Text className={`${standardTitle} mt-10`}>Crear Cuenta</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View className="p-6">
          <TextInput 
            className={`${inputFormStyle}`} 
            placeholder="Nombre" 
            placeholderTextColor="#aaa"
            onChangeText={setName} 
          />
          <TextInput 
            className={`${inputFormStyle}`} 
            placeholder="Email" 
            placeholderTextColor="#aaa"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput 
            className={`${inputFormStyle}`} 
            placeholder="User" 
            placeholderTextColor="#aaa"
            onChangeText={setUser} 
            autoCapitalize="none"
          />
          <TextInput 
            className={`${inputFormStyle}`} 
            placeholder="Contraseña" 
            placeholderTextColor="#aaa"
            onChangeText={setPassword} 
            secureTextEntry={true} 
            autoCapitalize="none"
          />
          <TextInput 
            className={`${inputFormStyle}`} 
            placeholder="Confirmar Contraseña"
            placeholderTextColor="#aaa"
            onChangeText={setConfirm} 
            secureTextEntry={true} 
            autoCapitalize="none"
          />
          <Pressable onPress={onCreate} className={`${standardButton} mt-5`}>
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white">Registrarse</Text>
            )}
          </Pressable>

          <View>
            <Text className="text-[#555] text-center mt-4">¿Ya tienes cuenta? <Link className={`${linkStyle}`} href='/login'>Inicia sesión</Link></Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  }
});
