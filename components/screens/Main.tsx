import { Alert, View } from "react-native"
import { useEffect, useState } from "react";

import { getCategories } from "../../lib/api_general";

import { SearchInput, Footer } from '../'
import HomeCard from "../molecules/HomeCard";

import { Category } from "../../types/general_api";

export default function Main() {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
    .then((elements: Category[]) => {
      setCategories(elements)
    })
    .catch((e) => {
      Alert.alert(
        "Error",  // Título de la alerta
        "No se pudieron obtener los datos iniciales.",  // Mensaje de la alerta
        [ { text: "OK" } ]
      )
    })
  }, [])

  return (
    <View className="h-full flex flex-col justify-between">
      <SearchInput />
      <View className="flex flex-col justify-between">
        {categories.map((category) => (
          <HomeCard
            key={category.id_category}
            text={category.title}
            href={`/listItems/${category.id_category}`}
            category={category.slug}
          />
        ))}
      </View>
      <Footer />
    </View>
  )
}
