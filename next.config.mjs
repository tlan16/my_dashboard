const basePath = process.env.NODE_ENV === 'production' ? '/my_dashboard' : '';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  generateBuildId: async () => {
    return new Date().toJSON()
  },
  basePath,
  assetPrefix: `${basePath}/`
}

export default nextConfig
