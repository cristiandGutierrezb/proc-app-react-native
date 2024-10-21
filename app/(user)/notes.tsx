import { useState, useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Notes() {

  const [note, setNote] = useState('')
  // const [notes, setNotes] = useState([])

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('note', note)
      console.log('Data saved');
    } catch (error) {
      alert('Error saving')
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('notes')
      if (value !== null) {
        setNote(value)
      }
    } catch (error) {
      alert('Error')
    }
  }

  return (
    <View className='h-full'>
      <View>
        <Text>Ingrese Nota</Text>
        <TextInput 
          onChangeText={setNote}
        />
      </View>
    </View>
  )
}
