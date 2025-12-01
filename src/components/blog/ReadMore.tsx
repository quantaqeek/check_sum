"use client";

import { News, NewsList } from "@/app/data";
import { BiArrowToRight, BiCalendar, BiUser } from "react-icons/bi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CategoryType =
  | "Technology"
  | "Productivity"
  | "Lifestyle"
  | "Science"
  | "Finance";
type CategorizedArticles = Record<CategoryType, NewsList[]>;

export default function ReadMore() {
  const [hoveredArticleId, setHoveredArticleId] = useState<number | null>(null);

  // Group articles by category and get top 3 most recent
  const getCategoryArticles = (): CategorizedArticles => {
    const categories: Partial<CategorizedArticles> = {};

    News.forEach((article) => {
      const category = article.category as CategoryType;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category]!.push(article);
    });

    // Sort each category by date (most recent first) and take top 3
    const sorted: Partial<CategorizedArticles> = {};
    Object.keys(categories).forEach((key) => {
      const category = key as CategoryType;
      sorted[category] = categories[category]!.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ).slice(0, 3);
    });

    return sorted as CategorizedArticles;
  };

  const categoryColors: Record<CategoryType, string> = {
    Technology: "from-[#98FB98] to-[#98FB98] ",
    Productivity: "from-[#00FF7F]  to-[#00FF7F]",
    Lifestyle: "from-[#ADFF2F] to-[#ADFF2F]",
    Science: "from-[#7CFC00] to-[#7CFC00]",
    Finance: "from-[#9ACD32] to-[#9ACD32]",
  };

  const categoryBgLight: Record<CategoryType, string> = {
    Technology: "bg-blue-50 dark:bg-blue-950/30",
    Productivity: "bg-purple-50 dark:bg-purple-950/30",
    Lifestyle: "bg-pink-50 dark:bg-pink-950/30",
    Science: "bg-emerald-50 dark:bg-emerald-950/30",
    Finance: "bg-amber-50 dark:bg-amber-950/30",
  };

  const categoryBorder: Record<CategoryType, string> = {
    Technology: "border-blue-200 dark:border-blue-800",
    Productivity: "border-purple-200 dark:border-purple-800",
    Lifestyle: "border-pink-200 dark:border-pink-800",
    Science: "border-emerald-200 dark:border-emerald-800",
    Finance: "border-amber-200 dark:border-amber-800",
  };

  const categoryEmojis: Record<CategoryType, string> = {
    Technology: "💻",
    Productivity: "⚡",
    Lifestyle: "✨",
    Science: "🔬",
    Finance: "💰",
  };

  const categorizedArticles = getCategoryArticles();

  return (
    <section className="w-full flex flex-col gap-16 py-16 px-4 md:px-8 bg-white dark:bg-slate-950">
      <div className="flex flex-col  px-4 md:px-6 lg:px-24 ">
        <div className="flex flex-col gap-3 border-b">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Read More
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Explore our latest articles organized by category
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative px-4 md:px-6 lg:px-24">
        {(
          Object.entries(categorizedArticles) as Array<
            [CategoryType, NewsList[]]
          >
        ).map(([category, articles]) => (
          <div key={category} className="flex flex-col gap-6 relative">
            {/* Category Header */}
            <div
              className={`flex items-center gap-3 pb-4 border-b-2 ${categoryBorder[category]}`}
            >
              <span className="text-3xl">{categoryEmojis[category]}</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {category}
              </h3>
              <span
                className={`ml-auto ${categoryBgLight[category]} text-slate-700 dark:text-slate-300 text-sm font-semibold px-3 py-1 rounded-full border border-current border-opacity-20`}
              >
                {articles.length}
              </span>
            </div>

            {/* Articles */}
            <div className="flex flex-col gap-5">
              {articles.map((article, index) => (
                <Link className=" flex flex-col" key={article.id} href={`/blog/${article.slug}`}>
                  <motion.article
                    onHoverStart={() => setHoveredArticleId(article.id)}
                    onHoverEnd={() => setHoveredArticleId(null)}
                    whileHover={{ x: 4 }}
                    className={`group relative flex flex-col gap-3 p-4 rounded-lg transition-all duration-300 cursor-pointer z-10 ${
                      hoveredArticleId === article.id
                        ? `${categoryBgLight[category]} dark:${categoryBgLight[category]}`
                        : "hover:bg-slate-50 dark:hover:bg-slate-900/50"
                    }`}
                  >
                    {/* Mobile Image - Always visible on mobile */}
                    <motion.div className="md:hidden relative w-full h-40 rounded-md overflow-hidden mb-2">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Desktop Hover Image */}
                    <AnimatePresence>
                      {hoveredArticleId === article.id && (
                        <>
                          {/* Backdrop */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="hidden md:block fixed inset-0 z-40"
                            style={{ pointerEvents: "none" }}
                          />

                          {/* Image */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="hidden md:block fixed w-72 h-48 rounded-lg overflow-hidden shadow-2xl z-50 border border-slate-200 dark:border-slate-700"
                            style={{
                              top: "50%",
                              left: "30%",
                              transform: "translate(-50%, -30%)",
                              pointerEvents: "none",
                            }}
                          >
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    {/* Article Number and Title */}
                    <div className="flex items-start gap-3">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`bg-gradient-to-r ${categoryColors[category]} text-stone-600 text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md`}
                      >
                        {index + 1}
                      </motion.span>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-lime-500 dark:group-hover:text-lime-500 transition-colors leading-tight">
                        {article.title}
                      </h4>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 ml-10">
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1"
                      >
                        <BiCalendar size={14} />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1"
                      >
                        <BiUser size={14} />
                        {article.author}
                      </motion.div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            {/* View All Button */}
           <Link href="/blog" className="flex w-full justify-stretch">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`flex items-center w-full justify-center gap-2 mt-4 py-3 px-4 rounded-lg font-semibold text-stone-600 bg-gradient-to-r ${categoryColors[category]} hover:shadow-lg transition-all duration-300 group/btn dark:shadow-lg dark:shadow-slate-900/50`}
            >
              View All {category}
              <motion.div
                className="group-hover/btn:translate-x-1"
                animate={{ x: 0 }}
              >
                <BiArrowToRight size={18} />
              </motion.div>
            </motion.button>
           </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
