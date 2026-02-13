// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAuthorBySlug, getPostsByAuthor, getAuthors } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const [author, posts] = await Promise.all([
    getAuthorBySlug(slug),
    getPostsByAuthor(slug),
  ]);

  if (!author) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author Profile */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {author.metadata?.avatar?.imgix_url ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={author.metadata?.name || author.title}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-cosmic-200 dark:ring-cosmic-800"
                width={160}
                height={160}
              />
            ) : (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-cosmic-200 dark:bg-cosmic-800 flex items-center justify-center ring-4 ring-cosmic-200 dark:ring-cosmic-800">
                <span className="text-6xl">👨‍🚀</span>
              </div>
            )}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {author.metadata?.name || author.title}
              </h1>
              {author.metadata?.bio && (
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  {author.metadata.bio}
                </p>
              )}
              <p className="text-cosmic-600 dark:text-cosmic-400 font-medium mt-4">
                {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
              </p>
            </div>
          </div>
        </div>

        {/* Author's Posts */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Articles by {author.metadata?.name || author.title}
        </h2>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card">
            <p className="text-gray-600 dark:text-gray-400">
              No articles published yet.
            </p>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/authors"
            className="inline-flex items-center gap-2 text-cosmic-600 dark:text-cosmic-400 hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All authors
          </Link>
        </div>
      </div>
    </div>
  );
}