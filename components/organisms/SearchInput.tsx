import { useState } from 'react';
import { View, TextInput } from 'react-native'

import * as Tokens from "../tokens"

export function SearchInput() {

  const [text, setText] = useState('')

  return (
    <View className='pt-10'>
      <TextInput
        className={`${Tokens.standardInput} ${Tokens.shadowStandard}`}
        onChangeText={setText}
      />
    </View>
  )
}
