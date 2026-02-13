import Link from 'next/link';

// This page must be self-contained and not rely on any context providers
// because it's prerendered statically and may render outside the normal layout

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | Stellar Space Blog</title>
        <meta name="description" content="The page you're looking for could not be found." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans" style={{ backgroundColor: '#030712', color: '#f3f4f6', margin: 0 }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Simple Header */}
          <header style={{ 
            position: 'sticky', 
            top: 0, 
            zIndex: 50, 
            backgroundColor: 'rgba(17, 24, 39, 0.8)', 
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(55, 65, 81, 0.5)'
          }}>
            <nav style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  <span style={{ fontSize: '1.5rem' }}>🚀</span>
                  <span style={{ 
                    fontWeight: 'bold', 
                    fontSize: '1.25rem', 
                    background: 'linear-gradient(to right, #a855f7, #60a5fa)', 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Stellar
                  </span>
                </Link>
              </div>
            </nav>
          </header>

          {/* 404 Content */}
          <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '6rem' }}>🌌</span>
              </div>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                background: 'linear-gradient(to right, #a855f7, #60a5fa)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                404
              </h1>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', marginBottom: '1rem' }}>
                Lost in Space
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '28rem', margin: '0 auto 2rem' }}>
                The page you&apos;re looking for has drifted into a black hole or never existed in this universe.
              </p>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(to right, #9333ea, #2563eb)',
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </Link>
            </div>
          </main>

          {/* Simple Footer */}
          <footer style={{ backgroundColor: '#111827', borderTop: '1px solid #1f2937', padding: '1.5rem 0' }}>
            <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>
              © {new Date().getFullYear()} Stellar Space Blog
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}