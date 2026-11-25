import { useState } from "react"
import BlogButton from "./BlogButton/BlogButton"
import ArticlesCard from "../../Home/LatestArticles/ArticlesCard/ArticlesCard"
import ArticlesList from "../../Home/LatestArticles/ArticlesList/ArticlesList"

export default function BlogTab({Data , posts }) {
const allCategories=[{name: 'جميع المقالات', count: 3, color: 'emerald'} , ...Data
]




let FirstBLog=allCategories[0].name
  const [activeButton,setActiveButton]=useState(FirstBLog)
  const [search, setSearch] = useState("")
  const [pageBlog,setPageBlog]=useState(1)
  const [uiPage,setuiPage]=useState("grid")

const getFilteredArticles = () => {
  const searchValue = search.trim().toLowerCase();

  return posts.filter((post) => {
    const isCategoryMatched =
      activeButton === FirstBLog || post.category === activeButton;

    const isSearchMatched =
      post.title.toLowerCase().includes(searchValue);

    return isCategoryMatched && isSearchMatched;
  });
};

  const PageNum=6;
  const totalPages = Math.ceil(
  getFilteredArticles().length / PageNum
);
const pages = [];

for (let i = 1; i <= totalPages; i++) {
  pages.push(i);
}

const startIndex = (pageBlog - 1) * PageNum;

const endIndex = startIndex + PageNum;
const currentArticles = getFilteredArticles().slice(
  startIndex,
  endIndex
);

  const handleCategoryChange = (category) => {
  setActiveButton(category);
    setPageBlog(1);

};

const handlePageChange = (page) => {
  setPageBlog(page);
};




  return (
    <>

        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">



<div className="flex flex-col md:flex-row justify-between items-center gap-4">


  <div className="relative w-[50%] md:w-80">

<input value={search}
onChange={(e) => setSearch(e.target.value)} type="text" placeholder="ابحث في المقالات..."  className="input-Blog w-full px-5 py-3 pr-12 text-white rounded-2xl" />
<i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>

  </div>

  <div className="flex flex-wrap justify-center gap-2">
{allCategories.map((name , index) => <BlogButton name={name}  handleCategoryChange={handleCategoryChange}  activeButton={activeButton} key={index} />)}

    </div>





</div>



        </div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">


          <div className="mb-8 flex items-center justify-between">


            <p className="text-neutral-400"> 
              عرض <span className="font-bold text-white" > {getFilteredArticles().length} </span> مقالات 
            </p>


            <div className="flex items-center gap-2"> 
<div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">


  <button  onClick={() => setuiPage("grid")}  className={`p-2 rounded-lg transition-all cursor-pointer duration-300 ${uiPage==="grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`} title="عرض شبكي" > 
    <i class="fa-solid fa-table-cells-large w-5 h-5"></i>
  </button>
  <button onClick={ () =>setuiPage("List")} className={`p-2 rounded-lg transition-all  cursor-pointer  duration-300  ${uiPage==="List" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`} title="عرض قائمة">

<i class="fa-solid fa-bars w-5 h-5"></i>
  </button>
</div>





            </div>
            
          </div>
      {uiPage === "grid" ? (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {currentArticles.map((post) => (
      <ArticlesCard key={post.id} Data={post} />
    ))}
  </div>
) : (
  <div className="flex flex-col gap-6">
    {currentArticles.map((post) => (
      <ArticlesList key={post.id} Data={post} />
    ))}
  </div>
)}
{totalPages>1&&(<div className="flex justify-center items-center gap-2 mt-12" >

<button
  onClick={() => handlePageChange(pageBlog - 1)}
  disabled={pageBlog === 1}
className={`p-3 rounded-xl border transition-all duration-300 ${
  pageBlog === 1
    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
}`}
>
  <i class="fa-solid fa-chevron-left w-5 h-5 rotate-180"></i>
</button>
{pages.map((page) => (
  <button
    key={page}
    onClick={() => handlePageChange(page)}
    className={`min-w-[44px] h-11 rounded-xl border transition-all duration-300 ${
      pageBlog === page
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500"
        : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/50"
    }`}
  >
    {page}
  </button>
))}
  <button
  onClick={() => handlePageChange(pageBlog + 1)}
  disabled={pageBlog === totalPages}
className={`p-3 rounded-xl border transition-all duration-300 ${
  pageBlog === totalPages
    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
}`}
>
  <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180"></i>
</button>
</div>)

}
        </div>





    </>
  )
}
