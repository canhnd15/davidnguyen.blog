import React from 'react'
import Link from '../components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Slogun from '@/data/authors/onepercent.svg'
import { Eye } from 'lucide-react'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col items-center xl:flex-row">
        <div className="mr-10">
          <h1 className="text-1xl sm:text-1xl pb-6 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-5xl md:leading-14">
            Hello, Friends!
          </h1>
          <h2 className="text-2lg prose text-gray-600 dark:text-gray-400">
            {`Welcome to my blog, the blog of a minimalist software engineer. Currently, I'm working as a 
            full-stack web engineer. I love reading, writing, and in my free time, I usually write on my blog, 
            travel to new places, or practice calisthenics.`}
          </h2>
        </div>
        <div className="my-4 flex w-[300px] items-center justify-center sm:w-[400px] md:w-[550px]">
          <Slogun />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-2 md:space-y-3"></div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, redisKey } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <span className="text-xm flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Eye className="h-4 w-4" />{' '}
                        {Intl.NumberFormat('en-US', { notation: 'compact' }).format(900 ?? 0)}
                      </span>
                      <p>{redisKey}</p>
                      <dd className="flex text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
