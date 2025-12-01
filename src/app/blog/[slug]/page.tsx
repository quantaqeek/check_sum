import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { SocialShare } from "@/components/blog/SocialShare";
import { MobileSocialShare } from "@/components/blog/MobileSocialShare";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import ReadMore from "@/components/blog/ReadMore";
import SubscribeToOurNewsletter from "@/components/common/SubscribeToOurNewsletter";
import ThemeToggle from "@/components/common/ThemeToggle";

type Props = {
  params: Promise<{ slug: string }>;
};

// This would normally come from a database or CMS
const posts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    excerpt: "Welcome to my blog! This is my first post using MDX in Next.js.",
    date: "2025-01-15",
    author: "John Doe",
    authorProfile: "/assets/avatars/Gavatar3.jpeg",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with Next.js 15 and the App Router.",
    date: "2025-01-20",
    author: "John Doe",
    authorProfile: "/assets/avatars/Gavatar1.jpeg",
  },
   {
    slug: "the-trading-mystery-how-markets-have-changed-from-1990-to-2025",
    title: "The Trading Mystery: How Markets Have Changed From 1990 to 2025",
    excerpt:
      "Learn how to build modern web applications with Next.js 15 and the App Router.",
    date: "2025-11-20",
    author: "Chris Kinu",
    authorProfile: "/assets/avatars/Gavatar2.jpeg",
  },
  {
    slug: "react-components-in-mdx",
    title: "Using React Components in MDX",
    excerpt:
      "Discover how to create interactive blog posts with React components embedded in MDX.",
    date: "2025-01-25",
    author: "John Doe",
    authorProfile: "/assets/avatars/Gavatar2.jpeg",
  },
      {
    slug: 'the-forgotten-story.mdx',
    title: 'And Equation for the Lifes Matrix',
    excerpt: 'Discover how to create interactive blog posts with React components embedded in MDX.',
    date: '2025-01-25',
    author: 'Bett Enock',
    authorProfile: "/assets/avatars/Gavatar5.jpeg",
  },
];

async function getPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  try {
    const Content = (await import(`@/posts/${slug}.mdx`)).default;
    return { Content, ...post };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} by ${post.author}`,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { Content, title, date, author, authorProfile } = post;
  const postUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"
  }/blogs/${slug}`;

  return (
    <section className="w-full flex flex-col min-h-screen ">
      <div className="w-full flex flex-col  relative">
        <div className="absolute inset-0 -z-10 h-full w-full dark:bg-[#00160E]">
          <Image
            src="/assets/fancy/limeBg.svg"
            alt="magazine-old"
            fill
            className="block dark:hidden"
            sizes="100%"
            style={{ objectFit: "cover" }}
            priority
            quality={85}
          />
          {/* <Image
            src="/assets/bg_designs/grid_bg9.jpg"
            alt="magazine-old"
            fill
            className="hidden dark:block"
            sizes="100%"
            style={{ objectFit: "cover" }}
            priority
            quality={85}
          /> */}
          \
        </div>
        {/* Fixed Social Share - Desktop Only */}
        <SocialShare title={title} url={postUrl} />

        {/* Mobile Floating Share Button */}
        <MobileSocialShare title={title} url={postUrl} />

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto p-4 sm:p-6 md:pl-24 py-12 mt-16 md:mt-16 w-full flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Article - Takes 8 columns on desktop */}
            <article className="lg:col-span-9">
              <div className="w-full flex items-center justify-between mb-2">
                <ThemeToggle />
                <div className="p-2">
                  <Link href={"/blog"} className="flex gap-2 items-center">
                    <p className="text-sm font-light ">Back to Blogs </p>
                    <span>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <header className="mb-12 border-t-2 border-b-2 border-stone-950 dark:border-stone-50">
                <div className="w-full flex border-t-4 border-stone-900 dark:border-stone-50 mt-2">
                  <h1 className="text-5xl md:text-7xl p-2 font-bold font-anton">
                    {title}
                  </h1>
                </div>
                <div className="w-full border-b-4 border-stone-900 dark:border-stone-50 flex justify-between items-center pb-2">
                  <div className="flex font-nanumMyeongjo font-thin items-center gap-4 text-gray-600 dark:text-gray-400">
                    <time dateTime={date}>{date}</time>
                    <span>•</span>
                    <span>{author}</span>
                  </div>
                  <div className="flex items-center relative rounded-full">
                    <Image
                      src={authorProfile}
                      alt={author}
                      width={50}
                      height={50}
                      className="shadow-lg rounded-full"
                    />
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert  max-w-none prose-headings:text-TextPrimary-light prose-font-serif dark:prose-headings:text-TextPrimary-dark prose-a:text-TextLink-light dark:prose-a:text-TextLink-dark">
                <Content />
              </div>

              {/* Mobile Related Posts - Shows below content on mobile */}
              <div className="lg:hidden mt-12 pt-8 border-t-2 border-gray-300">
                <RelatedPosts currentSlug={slug} posts={posts} />
              </div>
            </article>

            {/* Related Posts Sidebar - Takes 4 columns on desktop, hidden on mobile */}
            <div className="hidden lg:block lg:col-span-3">
              <RelatedPosts currentSlug={slug} posts={posts} />
            </div>
          </div>
        </div>
      </div>
      <ReadMore/>
       <SubscribeToOurNewsletter/>
    </section>
  );
}
