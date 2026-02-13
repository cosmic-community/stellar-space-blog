// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPosts } from '@/lib/cosmic';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.metadata?.featured_image?.imgix_url;
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const content = post.metadata?.content || '';

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <header className="relative">
        {imageUrl ? (
          <div className="relative h-[50vh] md:h-[60vh]">
            <img
              src={`${imageUrl}?w=2400&h=1200&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
          </div>
        ) : (
          <div className="h-[40vh] bg-gradient-to-br from-cosmic-600 to-cosmic-900" />
        )}
        
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-cosmic-500/80 text-white backdrop-blur-sm mb-4 hover:bg-cosmic-500 transition-colors"
              >
                {category.metadata?.name || category.title}
              </Link>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              {post.title}
            </h1>
            {author && (
              <Link href={`/authors/${author.slug}`} className="inline-flex items-center gap-3 group">
                {author.metadata?.avatar?.imgix_url ? (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                    width={48}
                    height={48}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-cosmic-500 flex items-center justify-center ring-2 ring-white/30">
                    <span className="text-xl">👨‍🚀</span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-white group-hover:text-cosmic-300 transition-colors">
                    {author.metadata?.name || author.title}
                  </p>
                  <p className="text-sm text-gray-300">Author</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* Back to posts */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cosmic-600 dark:text-cosmic-400 hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}