import { defineConfig } from 'next/config';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
},
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
}
}
}
},
  publicRuntimeConfig: {
    brandName: "AI",
    primaryColor: "#FF4500", // orange
    secondaryColor: "#FF0000", // red
    backgroundColor: "#FFFFFF", // white
    siteDescription: "At AI, we specialize in cutting-edge artificial intelligence technology that empowers users to create stunning videos effortlessly.",
    siteKeywords: "AI, technology, video creation, artificial intelligence, modern design",
    contactEmail: "info@ai.com",
    phoneNumber: "+1-800-555-0199"
}
});