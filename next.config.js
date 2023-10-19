/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
    unoptimized: true,
  },
};
