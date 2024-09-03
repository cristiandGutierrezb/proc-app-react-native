import { Pressable } from "react-native"

type CustomButtonProps = {
  text: string,
  customFun: () => void 
}

export default function CustomButton({ text, customFun }: CustomButtonProps) {
  return (
    <Pressable
      onPress={customFun}
    >
      { text }
    </Pressable>
  )
}
