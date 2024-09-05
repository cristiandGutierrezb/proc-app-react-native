import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Link } from 'expo-router';
import { LoginIcon } from '../atoms/icons';

export default function SearchInput() {

  const [text, setText] = useState('')

  return (
    <View style={styles.header}>
      <Link href='/login'>
        <LoginIcon
          size={24}
          color='white' 
        />
      </Link>
      <TextInput
        style={styles.input}
        onChangeText={setText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10%',
    backgroundColor: 'black'
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