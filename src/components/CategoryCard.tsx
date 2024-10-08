import { Category } from '../types'
import { CategoryCardHeading } from './CategoryCardHeading'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 w-100'>
      <CategoryCardHeading title={category.title} />
    </div>
  )
}
