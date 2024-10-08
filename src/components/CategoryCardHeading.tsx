type CategoryCardHeadingProps = {
  title: string
}

export const CategoryCardHeading = ({ title }: CategoryCardHeadingProps) => {
  return (
    <div className='flex justify-between items-center'>
      <h3 className='font-bold text-lg'>{title}</h3>
      <button
        data-dndkit-disabled-dnd-flag='true'
        className='text-red-500 hover:text-red-700 ml-4'
      >
        削除
      </button>
    </div>
  )
}
