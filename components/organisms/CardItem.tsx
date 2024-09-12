import { Text, View, Image, StyleSheet } from "react-native"
import { Link } from "expo-router"

import { Game } from "../../types/game"

type CardItemProps = {
  game: Game
}

export function CardItem({ game }: CardItemProps) {
  return (
    <Link style={styles.content} href={`/card/${game.slug}`}>
      <View>
        <Image style={ styles.image } source={{ uri: game.image }}/>
        <Text style={styles.score}>{game.score}</Text>
        <Text style={styles.description}>{game.description.slice(0, 50)}...</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '80%',
    marginHorizontal: 'auto',
    marginBottom: 30
  },
  image: {
    borderRadius: 10,
    width: 107,
    height: 147,
    marginHorizontal: 'auto'
  },
  score: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    color: 'white'
  }
})
