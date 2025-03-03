export interface Author {
  username: string
  bio: string | null
  image: string | null
  following: boolean
}

export interface Article {
  id: string
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Author
}
