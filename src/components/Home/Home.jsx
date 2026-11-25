import BlogSection from "./BlogSection/BlogSection";
import Categories from "./Categories/Categories";
import HeroSection from "./HeroSection/HeroSection";
import LatestArticles from "./LatestArticles/LatestArticles";

export default function Home({Data}) {

  
  return (
  <>
<HeroSection />
<BlogSection  Data={Data.posts} />
<Categories  categories={Data.categories}  />
<LatestArticles  Data={Data.posts} />

  </>
    
  )
}
