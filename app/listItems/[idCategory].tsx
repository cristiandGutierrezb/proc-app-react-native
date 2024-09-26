import ListElement from "../../components/screens/ListElement"

import { useLocalSearchParams } from "expo-router"

export default function listItems() {
  const { idCategory } = useLocalSearchParams()
  return <ListElement idCategory={+idCategory} />
}
