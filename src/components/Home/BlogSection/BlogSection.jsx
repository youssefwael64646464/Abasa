import BlogArticle from "./BlogArticle/BlogArticle";
import BlogHeader from "./BlogHeader/BlogHeader";

export default function BlogSection({Data}) {


  return (

  
    <>
      <section className="py-24 bg-[#0a0a0a]  relative overflow-hidden">
        <BlogHeader />

        
{Data.slice(0,3).map((item) => <BlogArticle key={item.id} Data={item} />   )}
        

        
      </section>
    </>
  );
}
