// app/blog/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PostList, Posts, } from '@/app/data';
import FadingLineTitle from '../common/FadingLineTitle';
import BlogGrid from './BlogGrid';


const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<PostList['category'] | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: (PostList['category'] | 'All')[] = ['All', 'Technology', 'Productivity', 'Lifestyle', 'Science', 'Finance'];

  // Filter blogs based on category and search term
  const filteredBlogs = Posts.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full  py-12">
      <div className="container mx-auto px-4 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FadingLineTitle 
            title="Our Blog"
            lineColor="border-gray-300"
            textColor="text-gray-800 dark:text-yellow-100"
            className="mb-6"
          />
          <p className="text-gray-600  dark:text-secondary-light max-w-2xl mx-auto text-lg">
            Discover insights, tips, and stories across technology, productivity, and more
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Input */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 text-lime-950 dark:text-gray-800 rounded-lg border border-gray-200 focus:border-lime-300 focus:ring-2 focus:ring-lime-100 transition-all duration-300 bg-white/50 dark:bg-slate-50 backdrop-blur-sm"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-lime-400 text-white border-lime-500 shadow-lg shadow-lime-500/25'
                    : 'bg-white/50 dark:bg-slate-50 text-gray-700 border-gray-200 hover:border-lime-300 hover:bg-lime-50/50'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 "
        >
          <p className="text-gray-600">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow'
          >
            <BlogGrid blogs={filteredBlogs} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;