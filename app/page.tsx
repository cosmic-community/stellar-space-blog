import { getPosts, getCategories } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export const revalidate = 60;

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-cosmic-950 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-500/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Explore the{' '}
              <span className="bg-gradient-to-r from-cosmic-400 to-cosmic-300 bg-clip-text text-transparent">
                Cosmos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the wonders of space through engaging articles about Mars exploration, black holes, and cutting-edge space technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-sm font-medium transition-colors"
                >
                  {category.metadata?.name || category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <PostCard post={featuredPost} featured />
        </section>
      )}

      {/* Latest Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <Link
            href="/categories"
            className="text-cosmic-600 dark:text-cosmic-400 hover:underline font-medium"
          >
            View all categories →
          </Link>
        </div>

        {otherPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center py-12">
            No additional articles yet. Check back soon!
          </p>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cosmic-600 to-cosmic-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-cosmic-100 mb-8 max-w-2xl mx-auto">
            Dive deeper into the universe with our expert authors and comprehensive coverage of space news.
          </p>
          <Link
            href="/authors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cosmic-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Meet Our Authors
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}