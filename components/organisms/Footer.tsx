import { View } from "react-native"
import { Link } from "expo-router"

import { HomeIcon, LoginIcon, RegisterIcon } from "../atoms/icons"

import { standardSizeIcon } from "../tokens"

export function Footer() {
  return (
    <View className="w-full h-16 border border-slate-200 flex flex-row justify-evenly items-center">
      <Link href={'/register'}>
        <RegisterIcon 
          color="black"
          size={standardSizeIcon}
        />
      </Link>
      <Link href={'/'}>
        <HomeIcon 
          color="black"
          size={standardSizeIcon}
        />
      </Link>
      <Link href={'/login'}>
        <LoginIcon 
          color="black"
          size={standardSizeIcon}
        />
      </Link>

    </View>
  )
}
