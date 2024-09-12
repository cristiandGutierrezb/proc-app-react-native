import { View } from "react-native"
import { Link } from "expo-router"

import { HomeIcon } from "../atoms/icons"

import { standardSizeIcon } from "../tokens"

export function Footer() {
  return (
    <View className="w-full h-16 border border-slate-200 flex items-center justify-center">
      <Link href={'/'}>
        <HomeIcon 
          color="black"
          size={standardSizeIcon}
        />
      </Link>
    </View>
  )
}
