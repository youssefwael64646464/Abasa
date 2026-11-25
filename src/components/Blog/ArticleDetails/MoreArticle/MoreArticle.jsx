import ArticlesCard from "../../../Home/LatestArticles/ArticlesCard/ArticlesCard"


export default function MoreArticle({posts ,article}) {

  const Article=posts.filter((post) =>{
    return post.category === article.category && post.slug !== article.slug
  } )

  return (
    <>
      <div className="mt-20 pt-12 border-t border-[#262626]">

  <div className="flex items-center justify-between mb-10">
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
      <i className="fa-solid fa-images text-orange-500 text-xl"></i>
      </span>

    <div> 
       <h2 className="text-2xl font-bold text-white">

مقالات قد تعجبك
      </h2>
      <p className="text-neutral-500 text-sm">
         استكشف المزيد من المحتوى المميز 
         </p>
         </div>

    </div>
      <a href="" className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group">
    عرض الكل
    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
  </a>
  </div>



<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


  {Article.map((item) => <ArticlesCard   key={item.id} Data={item} />)}
</div>

</div>
    </>
  )
}
