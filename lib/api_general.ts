const API = 'http://192.168.1.51:3000/api/v1';

export const getCategories = async () => {

  const rawData = await fetch(`${API}/categories`)

  const json = await rawData.json()

  const { data } = json

  return data

}

export const getAllItems = async () => {
  const rawData = await fetch(`${API}/items`)

  const json = await rawData.json()

  const { data } = json

  return data
}