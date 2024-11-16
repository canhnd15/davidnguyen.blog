import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const BookTag = ({ text }: Props) => {
  return (
    <p className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
      {text.split(' ').join('-')}
    </p>
  )
}

export default BookTag
