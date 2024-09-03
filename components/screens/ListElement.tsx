import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchInput from '../organisms/SearchInput'

import { getInfoGames } from '../../lib/metacritic'
import { Game } from '../../types/game'

export default function ListElement() {

  const [games, setGames] = useState<Game[]>()

  useEffect(() => {
    getInfoGames()
    .then((data: Game[]) => {
      setGames(data)
    })
  }, [])

  return (
    <View style={{ height: '100%' }}>
      <SearchInput />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black'
  }
})
