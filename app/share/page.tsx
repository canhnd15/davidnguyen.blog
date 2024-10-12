import ListShare from '@/layouts/ListShare'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allShares } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Share' })

export default function BlogPage() {
  const shares = allCoreContent(sortPosts(allShares))
  const pageNumber = 1
  const initialDisplayPosts = shares.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(shares.length / POSTS_PER_PAGE),
  }

  return (
    <ListShare
      posts={shares}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
