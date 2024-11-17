import ListBook from '@/layouts/ListBook'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBookReviews } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'BookReview' })

export default function BlogPage() {
  const reviews = allCoreContent(sortPosts(allBookReviews))
  const pageNumber = 1
  const initialDisplayPosts = reviews.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(reviews.length / POSTS_PER_PAGE),
  }

  return (
    <ListBook
      posts={reviews}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
