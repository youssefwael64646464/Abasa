import BlogHero from "./BlogHero/BlogHero";
import BlogTab from "./BlogTab/BlogTab";

export default function Blog({Data}) {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
      <BlogHero />


      <BlogTab Data={Data.categories} posts={Data.posts} siteInfo={Data.siteInfo} />
      </div>
    </>
  );
}
