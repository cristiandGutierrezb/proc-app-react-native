import { Text, View, Image, StyleSheet } from "react-native"
import { Link } from "expo-router"

import { Item } from "../../types/general_api"
import { standardCard, bgSecondaryColor } from "../tokens"

type CardItemProps = {
  item: Item
}

export function CardItem({ item }: CardItemProps) {
  return (
    <Link
      className={`${standardCard} bg-white mt-6 p-4`} 
      href={`/card/${item.slug}`}
    >
      <Image
        source={require('../../assets/favicon.png')}
        className="h-16 w-16"
      />
      <Text>{item.score}</Text>
      <Text>{item.title}</Text>
    </Link>
  )
}

