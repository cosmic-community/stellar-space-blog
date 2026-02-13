import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | Stellar Space Blog</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-gray-950 text-gray-100">
        <div className="min-h-screen flex flex-col">
          {/* Simple Header */}
          <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2 group">
                  <span className="text-2xl">🚀</span>
                  <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Stellar
                  </span>
                </Link>
              </div>
            </nav>
          </header>

          {/* 404 Content */}
          <main className="flex-grow flex items-center justify-center px-4">
            <div className="text-center">
              <div className="mb-8">
                <span className="text-8xl">🌌</span>
              </div>
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                Lost in Space
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                The page you&apos;re looking for has drifted into a black hole or never existed in this universe.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </Link>
            </div>
          </main>

          {/* Simple Footer */}
          <footer className="bg-gray-900 border-t border-gray-800 py-6">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Stellar Space Blog
            </p>
          </footer>
        </div>

        <style jsx global>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `}</style>
      </body>
    </html>
  );
}