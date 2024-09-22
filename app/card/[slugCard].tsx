import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useLocalSearchParams } from "expo-router"

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
  }, [])

  return (
    <View>
      <Text style={styles.text}>{ game.title }</Text>
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
