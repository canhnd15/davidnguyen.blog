import booksData from '@/data/booksData'
import BookCard from '@/components/BookCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Books() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-6 text-center md:space-y-5">
          <h1 className="font-mono text-xl leading-7 text-gray-500 dark:text-gray-400">
            "ĐỌC MỘT CUỐN SÁCH, ĐI VẠN ĐẶM ĐƯỜNG!"
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {booksData.map((d) => (
              <BookCard
                key={d.title}
                title={d.title}
                enTitle={d.enTitle}
                tags={d.tags}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
