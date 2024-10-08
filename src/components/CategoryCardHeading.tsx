import { useDispatch } from 'react-redux'
import { deleteCategory, toggleEditCategory } from '../redux/categorySlice'
import { deleteTodoByCategoryId } from '../redux/todoSlice'

type CategoryCardHeadingProps = {
  id: number
  title: string
}

export const CategoryCardHeading = ({
  id,
  title,
}: CategoryCardHeadingProps) => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(deleteCategory(id))
    dispatch(deleteTodoByCategoryId(id))
  }

  return (
    <div className='flex justify-between items-center'>
      <h3
        onDoubleClick={() => dispatch(toggleEditCategory(id))}
        className='font-bold text-lg'
      >
        {title}
      </h3>
      <button
        onClick={handleSubmit}
        className='text-red-500 hover:text-red-700 ml-4'
      >
        削除
      </button>
    </div>
  )
}
