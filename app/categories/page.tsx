import { genPageMetadata } from 'app/seo'
import categoryData from '../../data/categoryData'
import CategoryBlock from '../../components/CategoryBlock'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Category() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Category
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {categoryData.map((d) => (
              <CategoryBlock key={d.title} title={d.title} imgSrc={d.imgSrc} href={d.href} />
            ))}
          </div>
        </div>
        <div className="py-6 text-center">
          <p className="font-mono text-2xl uppercase opacity-65">
            {`< Sharing is the best way to learn! />`}
          </p>
        </div>
      </div>
    </>
  )
}
