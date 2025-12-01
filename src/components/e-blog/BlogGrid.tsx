// components/BlogGrid.tsx
'use client';

import { PostList } from '@/app/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest blog posts",
};

interface BlogGridProps {
  blogs: PostList[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  // Categorize blogs for different column layouts
  const getCategoryStyles = (category: PostList['category']) => {
    const baseStyles = "relative p-6 rounded-xl border backdrop-blur-sm ";
    
    const categoryStyles = {
      Technology: `${baseStyles}  `,
      Productivity: `${baseStyles}`,
      Lifestyle: `${baseStyles} `,
      Science: `${baseStyles} `,
      Finance: `${baseStyles} `
    };

    return categoryStyles[category];
  };

  // const getAccentLine = (id: number) => {
  //   const isLeft = id % 2 === 0;
  //   return isLeft 
  //     ? "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-purple-400 before:rounded-full"
  //     : "after:absolute after:right-0 after:top-4 after:bottom-4 after:w-0.5 after:bg-gradient-to-b after:from-green-400 after:to-emerald-400 after:rounded-full";
  // };

  const getCategoryColor = (category: PostList['category']) => {
    const colors = {
      Technology: 'bg-blue-100 text-blue-700 border-blue-200',
      Productivity: 'bg-green-100 text-green-700 border-green-200',
      Lifestyle: 'bg-purple-100 text-purple-700 border-purple-200',
      Science: 'bg-orange-100 text-orange-700 border-orange-200',
      Finance: 'bg-amber-100 text-amber-700 border-amber-200'
    };
    return colors[category];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogs.map((blog) => (

        <motion.div
          key={blog.id}
          className={`${getCategoryStyles(blog.category)} group cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-transparent`}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          layout
        >
         <Link  href={`/blog/${blog.slug}`}>
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Category Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-edu font-medium border ${getCategoryColor(blog.category)} mb-3`}>
            {blog.category}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 dark:text-BrandFancy-dark mb-3 line-clamp-2 hover:underline hover:text-red-500 transition-colors">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
         </Link>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-xl border-2 border-green-950 group-hover:border-green-500 dark:group-hover:border-green-200 transition-all duration-300 pointer-events-none" />
        </motion.div>


      ))}
    </motion.div>
  );
};

export default BlogGrid;