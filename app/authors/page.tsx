import Link from 'next/link';
import { getAuthors, getPostsByAuthor } from '@/lib/cosmic';

export const revalidate = 60;

export default async function AuthorsPage() {
  const authors = await getAuthors();

  // Get post count for each author
  const authorsWithCounts = await Promise.all(
    authors.map(async (author) => {
      const posts = await getPostsByAuthor(author.slug);
      return {
        ...author,
        postCount: posts.length,
      };
    })
  );

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Authors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the experts and enthusiasts behind our space coverage.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authorsWithCounts.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="group block"
            >
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex items-start gap-6">
                {author.metadata?.avatar?.imgix_url ? (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    width={96}
                    height={96}
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-cosmic-200 dark:bg-cosmic-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">👨‍🚀</span>
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-2">
                    {author.metadata?.name || author.title}
                  </h2>
                  {author.metadata?.bio && (
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                      {author.metadata.bio}
                    </p>
                  )}
                  <p className="text-sm text-cosmic-600 dark:text-cosmic-400 font-medium">
                    {author.postCount} {author.postCount === 1 ? 'article' : 'articles'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}