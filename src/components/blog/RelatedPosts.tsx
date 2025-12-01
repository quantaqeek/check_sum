import Link from 'next/link'
import Image from 'next/image'

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorProfile: string
}

type RelatedPostsProps = {
  currentSlug: string
  posts: Post[]
}

export function RelatedPosts({ currentSlug, posts }: RelatedPostsProps) {
  // Filter out current post and limit to 3 related posts
  const relatedPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <aside className="lg:sticky lg:top-24 space-y-6 ">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Related Posts
      </h3>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={post.authorProfile}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {post.author}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {post.date}
                  </p>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-lime-400 dark:group-hover:text-lime-400 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}