/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  generateBuildId: async () => {
    return new Date().toJSON()
  },
}

export default nextConfig
