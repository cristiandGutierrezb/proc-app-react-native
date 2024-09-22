import { View } from "react-native"
import { Link } from "expo-router"

import * as Tokens from "../tokens"

type HomeCardProps = {
  text: string,
  href: string,
  category: 'peliculas' | 'video_juegos' | 'pokemons'
}

export default function HomeCard({ text, href, category }: HomeCardProps) {

  let classColor = `${Tokens.shadowStandard} `
  category === 'pokemons' && (classColor += 'bg-blue-500')
  category === 'video_juegos' && (classColor += 'bg-green-500')
  category === 'peliculas' && (classColor += 'bg-red-500')

  return (
    <View className={`${classColor} w-[90%] h-20 flex justify-center items-center mx-auto rounded-full my-8`}>
      <Link href={href} className={`text-black ${Tokens.sizeBigText}`}>
        { text }
      </Link>
    </View>
  )
}
