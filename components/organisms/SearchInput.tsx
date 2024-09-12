import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Link } from 'expo-router';
import { LoginIcon } from '../atoms/icons';

export default function SearchInput() {

  const [text, setText] = useState('')

  return (
    <View>
      <Link href='/login'>
        <LoginIcon
          size={24}
          color='white' 
        />
      </Link>
      <TextInput
        onChangeText={setText}
      />
    </View>
  )
}
