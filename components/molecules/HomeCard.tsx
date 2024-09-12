import { View, StyleSheet } from "react-native"
import { Link } from "expo-router"

type HomeCardProps = {
  text: string,
  href: string,
  color: 'red' | 'green' | 'blue'
}

export default function HomeCard({ text, href, color }: HomeCardProps) {

  let classColor = ''
  color === 'blue' && (classColor = 'bg-blue-500')
  color === 'green' && (classColor = 'bg-green-500')
  color === 'red' && (classColor = 'bg-red-500')

  return (
    <View className={`${classColor} w-[90%] h-20 flex justify-center items-center mx-auto rounded-full my-8`}>
      <Link href={href} className="text-black text-4xl font-bold">
        { text }
      </Link>
    </View>
  )
}
