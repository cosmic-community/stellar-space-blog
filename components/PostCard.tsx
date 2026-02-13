import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const imageUrl = post.metadata?.featured_image?.imgix_url;
  const author = post.metadata?.author;
  const category = post.metadata?.category;

  if (featured) {
    return (
      <Link href={`/posts/${post.slug}`} className="group block">
        <article className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="md:flex">
            <div className="md:w-1/2">
              {imageUrl ? (
                <img
                  src={`${imageUrl}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                  width={600}
                  height={400}
                />
              ) : (
                <div className="w-full h-64 md:h-full bg-gradient-to-br from-cosmic-500 to-cosmic-700 flex items-center justify-center">
                  <span className="text-6xl">🌌</span>
                </div>
              )}
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              {category && (
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cosmic-100 dark:bg-cosmic-900 text-cosmic-700 dark:text-cosmic-300 mb-4 w-fit">
                  {category.metadata?.name || category.title}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-4">
                {post.title}
              </h2>
              {author && (
                <div className="flex items-center gap-3 mt-auto">
                  {author.metadata?.avatar?.imgix_url ? (
                    <img
                      src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                      alt={author.metadata?.name || author.title}
                      className="w-10 h-10 rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-cosmic-200 dark:bg-cosmic-800 flex items-center justify-center">
                      <span className="text-lg">👨‍🚀</span>
                    </div>
                  )}
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {author.metadata?.name || author.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-48 object-cover"
            width={400}
            height={250}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-cosmic-500 to-cosmic-700 flex items-center justify-center">
            <span className="text-5xl">🌌</span>
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cosmic-100 dark:bg-cosmic-900 text-cosmic-700 dark:text-cosmic-300 mb-3 w-fit">
              {category.metadata?.name || category.title}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-3">
            {post.title}
          </h3>
          {author && (
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              {author.metadata?.avatar?.imgix_url ? (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  className="w-8 h-8 rounded-full object-cover"
                  width={32}
                  height={32}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-cosmic-200 dark:bg-cosmic-800 flex items-center justify-center">
                  <span className="text-sm">👨‍🚀</span>
                </div>
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {author.metadata?.name || author.title}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}