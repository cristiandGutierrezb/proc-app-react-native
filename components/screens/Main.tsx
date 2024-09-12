import { View } from "react-native"

import HomeCard from "../molecules/HomeCard";
import { SearchInput, Footer } from '../'

export default function Main() {

  return (
    <View className="h-full flex flex-col justify-between">
      <SearchInput />
      <View className="flex flex-col justify-between">
        <HomeCard
          text="Peliculas"
          href="/listItems"
          color="red"
        />
        <HomeCard
          text="Pokémon"
          href="/login"
          color="green"
        />
        <HomeCard
          text="Video Juegos"
          href="/login"
          color="blue"
        />
      </View>
      <Footer />
    </View>
  )
}
