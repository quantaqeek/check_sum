import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['img.freepik.com','images.unsplash.com', 'images.unsplash.com'], 
  }
};


const withMDX = createMDX({
  extension: /\.mdx?$/,
   options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
export default withMDX(nextConfig)