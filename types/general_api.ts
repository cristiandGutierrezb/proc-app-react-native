export type Category = {
  id_category: number
  title: string
  slug: 'peliculas' | 'video_juegos' | 'pokemons'
  description: string | null
  state_id: number
}

export type Item = {
  id_item: number
  title: string
  description: string | null
  score: number
  slug: string
  category_id: number
  state_id: number
}
