import { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, ScrollView, StyleSheet, Image } from 'react-native'

import SearchInput from '../organisms/SearchInput'
import CardItem from '../organisms/CardItem'

import { getInfoGames } from '../../lib/metacritic'
import { Game } from '../../types/game'

export default function ListElement() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    getInfoGames()
    .then((data: Game[]) => {
      setGames(data)
    })
  }, [])

  return (
    <View style={{ height: '100%', backgroundColor: 'black' }}>
      <SearchInput />
      {games.length ? (
        <FlatList
          data={games}
          keyExtractor={game => game.slug}
          renderItem={({ item }) => <CardItem game={item} />}
        />
        // <ScrollView>
        //   {games.map((game) => (
        //     <Image 
        //       source={{ uri: game.image }} 
        //       style={styles.image}
        //       key={game.slug} 
        //     />
        //   ))}
        // </ScrollView>
      ): (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator  color={"#fff"} size={"large"} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 107,
    height: 147
  }
})
