import { DtoUser } from "../types/general_api";

const API = 'http://192.168.0.198:3000/api/v1';

import { Item } from "../types/general_api";

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

export const getItemsByCategory = async (id: Item['category_id']) => {
  const rawData = await fetch(`${API}/items/${id}`)

  const json = await rawData.json()

  const { data } = json
  
  return data
}


export const createUser = async (body: DtoUser) => {
  const rawData = await fetch(`${API}/user`, {
    method: 'POST',  // Método POST
    headers: {
      'Content-Type': 'application/json',  // Especifica el tipo de contenido como JSON
    },
    body: JSON.stringify(body),  // Convierte el objeto a JSON para enviarlo
  });

  const json = await rawData.json()
  const { data } = json
  return data
}
