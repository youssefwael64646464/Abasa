 import { useParams } from "react-router-dom"
import HeroArticleDetails from "./HeroArticleDetails/HeroArticleDetails"
import InformationArticle from "./informationArticle/InformationArticle"
import MoreArticle from "./MoreArticle/MoreArticle"

export default function ArticleDetails({ posts ,siteInfo }) {
  const { slug } = useParams()


  const article = posts.find((post) => post.slug === slug)




return (
  <>
  <article className="bg-[#0a0a0a] min-h-screen" >
<HeroArticleDetails article={article} />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" >
<InformationArticle article={article} siteInfo={siteInfo}/>

<MoreArticle posts={posts} article={article}  />


</div>





  </article>
  </>
  )
}