/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // Changed: Removed invalid 'eslint' key - no longer supported in next.config.js for Next.js 16
}

module.exports = nextConfig