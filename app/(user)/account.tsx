import { Image, Text, Pressable, View } from "react-native"

export default function account() {
  return (
    <View className="h-full justify-between">
      <View className='flex-row justify-between items-center p-4 bg-gray-100'>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} className='w-10 h-10 rounded-full' />
        <View className='flex-row space-x-2'>
          <Text className='px-3 py-1 bg-blue-200 rounded-full text-blue-800'>Tag 1</Text>
          <Text className='px-3 py-1 bg-green-200 rounded-full text-green-800'>Tag 2</Text>
          <Text className='px-3 py-1 bg-red-200 rounded-full text-red-800'>Tag 3</Text>
        </View>
        <View className='w-10' />
      </View>

      <View className='p-4'>
        <Text className='text-lg font-bold mb-3'>Tendencias</Text>
        <View className='bg-gray-200 p-4 rounded-lg mb-4'>
          <Text className='text-base'>#Tendencia1 - Descubre lo nuevo</Text>
        </View>
        <View className='bg-gray-200 p-4 rounded-lg mb-4'>
          <Text className='text-base'>#Tendencia2 - Lo más popular</Text>
        </View>
        <View className='bg-gray-200 p-4 rounded-lg'>
          <Text className='text-base'>#Tendencia3 - Novedades</Text>
        </View>
      </View>

      <View className='p-4'>
        <Text className='text-lg font-bold mb-3'>Foros</Text>
        <View className='bg-gray-200 p-4 rounded-lg mb-4'>
          <Text className='text-base'>Foro 1: Discusión abierta</Text>
        </View>
        <View className='bg-gray-200 p-4 rounded-lg mb-4'>
          <Text className='text-base'>Foro 2: Compartir ideas</Text>
        </View>
        <View className='bg-gray-200 p-4 rounded-lg'>
          <Text className='text-base'>Foro 3: Sugerencias y mejoras</Text>
        </View>
      </View>

      {/* Footer */}
      <View className='flex-row justify-around items-center p-4 bg-gray-100'>
        <Pressable>
          <Text>A</Text>
        </Pressable>
        <Pressable>
          <Text>B</Text>
        </Pressable>
        <Pressable>
          <Text>C</Text>
        </Pressable>
      </View>
    </View>
  )
}
