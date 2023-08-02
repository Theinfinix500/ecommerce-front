import { Category } from "./category.model"
import { Picture } from "./picture.model"

export interface Product {
  id: number
  title: string
  description: string
  price: number
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  picture: Picture
  categories: Category[]
}




