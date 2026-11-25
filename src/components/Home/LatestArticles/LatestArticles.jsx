import ArticlesCard from "./ArticlesCard/ArticlesCard"
export default function LatestArticles({Data}) {
  return (
    <>
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent">





</div>


<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

<div> 
  <h2 className="text-white text-6xl font-bold ">أحدث المقالات</h2>


<p className="text-lg text-[#a1a1a1]  mt-5 max-w-lg">محتوى جديد طازج من المطبعة</p>
 </div>

 <a href="" className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
  عرض جميع المقالات<i class="fa-solid fa-arrow-right w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
 </a>

</div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 

{Data.slice(3,6).map((post) => <ArticlesCard key={post.id} Data={post} />)}

</div>


</div>



    </section>
      
    </>
  )
}
