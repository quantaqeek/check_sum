"use client";

import { BlogTypes, Posts } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { GiMiddleArrow } from "react-icons/gi";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function BlogCategories() {
  const postsByCategory = useMemo(() => {
    return BlogTypes.map((cat) => ({
      ...cat,
      posts: Posts.filter((post) => post.category === cat.category).sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }));
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col p-4 md:p-8 gap-20">
      {postsByCategory.map((cat) => (
        <div key={cat.id} className="w-full flex flex-col gap-8">
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="font-anton text-4xl md:text-5xl">{cat.category}</h2>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-50 transition-colors">
              <Link
                href={`/categories/${cat.category.toLowerCase()}`}
                className="flex items-center gap-2"
              >
                <span className="font-medium">See More</span>
                <GiMiddleArrow className="text-lg" />
              </Link>
            </button>
          </div>

          {/* Featured Section - Top 2 Posts */}
          {cat.posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full overflow-hidden">
              {/* First Featured Post - Image as Background */}
             <Link
              href={`/blog/${cat.posts[0].slug}`}
              className=""
             >
              <motion.div
                className="relative h-80 md:h-screen rounded-lg overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url(${cat.posts[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all" />
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {cat.posts[0].category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {cat.posts[0].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span>{cat.posts[0].author}</span>
                      <span>
                        {new Date(cat.posts[0].date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
             </Link>

              {/* Second Featured Post - Image on Top */}
              {cat.posts.length > 1 && (
                <Link
                  href={`/blog/${cat.posts[1].slug}`}
                  className="flex flex-col-reverse md:flex-col h-full md:h-full rounded-lg overflow-hidden group cursor-pointer"
                >
                  <motion.div
                    className="relative h-96 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Image
                      src={cat.posts[1].image}
                      alt={cat.posts[1].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="flex flex-col justify-between flex-1 p-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {cat.posts[1].category}
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold line-clamp-2 group-hover:text-quaternary-dark group-hover:underline transition-colors">
                        {cat.posts[1].title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-b border-gray-200">
                      <span>{cat.posts[1].author}</span>
                      <span>
                        {new Date(cat.posts[1].date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          )}

          {/* Remaining Posts - List Section */}
          {cat.posts.length > 2 && (
            <div className="flex flex-col gap-4 w-full">
              {cat.posts.slice(2).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-BrandTertiary-dark transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-xs text-gray-500 whitespace-nowrap">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {cat.posts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No posts in this category yet.</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
