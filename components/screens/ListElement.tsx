import { View, FlatList, ActivityIndicator } from 'react-native'

import { CardItem, SearchInput } from '../'

import { Item } from '../../types/general_api'

type ListElementProps = {
  items: Item[] 
}

export default function ListElement({ items }: ListElementProps) {

  return (
    <View style={{ height: '100%', backgroundColor: 'black' }}>
      <SearchInput />
      {items.length ? (
        <FlatList
          data={items}
          keyExtractor={item => item.slug}
          renderItem={({ item }) => <CardItem item={item} />}
        />
      ): (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator  color={"#fff"} size={"large"} />
        </View>
      )}
    </View>
  )
}
