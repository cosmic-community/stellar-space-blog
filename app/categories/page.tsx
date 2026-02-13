import Link from 'next/link';
import { getCategories, getPostsByCategory } from '@/lib/cosmic';

export const revalidate = 60;

export default async function CategoriesPage() {
  const categories = await getCategories();

  // Get post count for each category
  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory(category.slug);
      return {
        ...category,
        postCount: posts.length,
      };
    })
  );

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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our content organized by topic. From deep space discoveries to the latest in space tech.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group block"
            >
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-5xl mb-4">
                  {categoryIcons[category.slug] || '📂'}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-2">
                  {category.metadata?.name || category.title}
                </h2>
                {category.metadata?.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.metadata.description}
                  </p>
                )}
                <p className="text-sm text-cosmic-600 dark:text-cosmic-400 font-medium">
                  {category.postCount} {category.postCount === 1 ? 'article' : 'articles'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}