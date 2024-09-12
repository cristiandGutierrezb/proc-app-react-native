import { useState } from 'react';
import { View, TextInput } from 'react-native'

export function SearchInput() {

  const [text, setText] = useState('')

  return (
    <View className='pt-10'>
      <TextInput
        className='border border-slate-500 rounded-lg p-2 w-[80%] mx-auto bg-white'
        onChangeText={setText}
      />
    </View>
  )
}
