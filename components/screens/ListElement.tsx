import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Text, Alert } from 'react-native'

import { getItemsByCategory } from '../../lib/api_general'

import { CardItem, SearchInput } from '../'
import { Item } from '../../types/general_api'

type ListElementProps = {
  idCategory: Item['category_id']
}

export default function ListElement({ idCategory }: ListElementProps) {

  const [items, setItems] = useState<Item[]>([])
  
  useEffect(() => {
    getItemsByCategory(idCategory)
    .then((data: Item[]) => {
      setItems(data)
    })
    .catch(() => {
      Alert.alert('error', 'Intenta de nuevo mas tarde')
    })
  }, [idCategory])

  return (
    <View className='h-full'>
      <SearchInput />
      {items?.length ? (
        <FlatList
          data={items}
          keyExtractor={item => item.slug}
          renderItem={({ item }) => <CardItem item={item} />}
        />
      ): (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator  color={"#000"} size={"large"} />
        </View>
      )}
    </View>
  )
}
