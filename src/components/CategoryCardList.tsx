import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { CategoryCard } from './CategoryCard'
import { Category } from '../types'

export const CategoryCardList = () => {
  const categories = useSelector((state: RootState) => state.categories)

  return (
    <div className='flex space-x-4 p-4'>
      {categories.map((category: Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}
