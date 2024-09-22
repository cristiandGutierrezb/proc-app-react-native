import { Text, View, Image, StyleSheet } from "react-native"
import { Link } from "expo-router"

import { Item } from "../../types/general_api"

type CardItemProps = {
  item: Item
}

export function CardItem({ item }: CardItemProps) {
  return (
    <Link style={styles.content} href={`/card/${item.slug}`}>
      <View>
        <Image style={ styles.image } source={{ uri: '' }}/>
        <Text style={styles.score}>{item.score}</Text>
        <Text style={styles.description}>{item.description?.slice(0, 50)}...</Text>
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
