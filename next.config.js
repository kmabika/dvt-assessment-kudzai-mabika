/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['e-cdns-images.dzcdn.net','api.deezer.com'],
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
