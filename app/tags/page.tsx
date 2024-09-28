import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import statisticByDate from 'app/statistic-date-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const statisticCounts = statisticByDate as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const statisticKeys = Object.keys(statisticByDate)
  return (
    <>
      <div className="mt-12 flex items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="h-screen items-center justify-center">
          <div className="space-x-2 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
              Tags
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap md:border-r-2">
            {tagKeys.length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              return (
                <div key={t} className="mb-2 mr-5 mt-2">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {` (${tagCounts[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="h-screen items-center justify-center">
          <div className="space-x-2 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
              Statistic
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            {statisticKeys.length === 0 && 'No tags found.'}
            {statisticKeys.map((t) => {
              return (
                <div key={t} className="mx-2 mb-2 mr-5 flex">
                  <h2 className="mx-2 my-1 font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    {t}
                  </h2>
                  <span className="mx-2 my-1">{`[${statisticCounts[t]}]`} </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
