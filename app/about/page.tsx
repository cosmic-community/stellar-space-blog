import Link from 'next/link';
import { getAboutPage, getAuthors } from '@/lib/cosmic';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const revalidate = 60;

export const metadata = {
  title: 'About | Stellar Space Blog',
  description: 'Learn more about Stellar Space Blog and our mission to explore the cosmos.',
};

export default async function AboutPage() {
  const [aboutPage, authors] = await Promise.all([
    getAboutPage(),
    getAuthors(),
  ]);

  const heroImageUrl = aboutPage?.metadata?.hero_image?.imgix_url;
  const headline = aboutPage?.metadata?.headline || 'About Stellar Space Blog';
  const content = aboutPage?.metadata?.content || '';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {heroImageUrl ? (
          <div className="relative h-[40vh] md:h-[50vh]">
            <img
              src={`${heroImageUrl}?w=2400&h=1200&fit=crop&auto=format,compress`}
              alt={headline}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          </div>
        ) : (
          <div className="h-[40vh] bg-gradient-to-br from-cosmic-600 via-cosmic-800 to-gray-900" />
        )}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {headline}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {content ? (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Content coming soon. Check back later!
            </p>
          </div>
        )}
      </section>

      {/* Team Section */}
      {authors.length > 0 && (
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              The passionate explorers and writers behind our space coverage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {authors.map((author) => (
                <Link
                  key={author.id}
                  href={`/authors/${author.slug}`}
                  className="group"
                >
                  <div className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    {author.metadata?.avatar?.imgix_url ? (
                      <img
                        src={`${author.metadata.avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                        alt={author.metadata?.name || author.title}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                        width={96}
                        height={96}
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-cosmic-200 dark:bg-cosmic-800 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">👨‍🚀</span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-2">
                      {author.metadata?.name || author.title}
                    </h3>
                    {author.metadata?.bio && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                        {author.metadata.bio}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Start Exploring
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Dive into our latest articles and discover the wonders of the universe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cosmic-600 text-white font-semibold rounded-lg hover:bg-cosmic-700 transition-colors"
        >
          Browse Articles
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}