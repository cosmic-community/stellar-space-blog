// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getPostsByCategory, getCategories } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, posts] = await Promise.all([
    getCategoryBySlug(slug),
    getPostsByCategory(slug),
  ]);

  if (!category) {
    notFound();
  }

  const categoryIcons: Record<string, string> = {
    'space-exploration': '🚀',
    'astronomy': '🔭',
    'space-technology': '🛰️',
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">
            {categoryIcons[category.slug] || '📂'}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {category.metadata?.name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {category.metadata.description}
            </p>
          )}
          <p className="text-cosmic-600 dark:text-cosmic-400 font-medium mt-4">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No articles in this category yet.
            </p>
            <Link
              href="/"
              className="text-cosmic-600 dark:text-cosmic-400 hover:underline font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-cosmic-600 dark:text-cosmic-400 hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All categories
          </Link>
        </div>
      </div>
    </div>
  );
}