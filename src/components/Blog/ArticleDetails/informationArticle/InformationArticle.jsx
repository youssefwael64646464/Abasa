import DEsArticle from "./DesArticle/DEsArticle"

export default function InformationArticle({article }) {

const Des=article.content.split("##")



  return (
    <>
      <div className="grid lg:grid-cols-[1fr_300px] gap-12">
<DEsArticle Des={Des}   article={article}  />

</div>
    </>
  )
}
