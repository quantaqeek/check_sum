// import FadingLineTitle from "../common/FadingLineTitle";
import BlogPage from "./BlogPage";

export default function BlogIntro() {
  return (
    <>
      <section className="flex min-h-screen flex-col w-full ">
        <div className="w-full flex items-center justify-center">
          <article className="flex items-center w-full p-2 sm:p-4 md:p-6 md:max-w-6xl">
            <p className="text-3xl font-roboto font-semibold ">
              Think of this blog as a mix between a lab, a library, and a
              campfire — where we experiment with ideas, learn new tricks, and
              occasionally laugh at life&apos;s absurdity. So grab a snack (or coffee
              if youre civilized), scroll through, and enjoy the beautiful mess
              of thought&apos;s, stories, and random insights that somehow make sense…
              eventually. Welcome aboard — your brain&apos;s about to have a good
              time. 🚀
            </p>
          </article>
        </div>
        <div className="w-full flex relative p-2 sm:p-4 md:p-6">
            
           <BlogPage/>
        </div>
      </section>
    </>
  );
}
