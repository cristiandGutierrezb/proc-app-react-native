import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useLocalSearchParams } from "expo-router"

import { getGameDetails } from "../../lib/metacritic"

import { GameDetail } from "../../types/game"

export default function SlugCard() {

  const [ game, setGame ] = useState<any>({
    img: '',
    title: '',
    slug: '',
    description: ''
  })

  const { slugCard } = useLocalSearchParams()

  useEffect(() => {
    getGameDetails(`${slugCard}`)
    .then((info: GameDetail) => {
      setGame(info)
    })
  }, [])

  return (
    <View>
      <Text style={styles.text}>{ game.title }</Text>
      {/* <Text style={styles.text}>{ game.description }</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
