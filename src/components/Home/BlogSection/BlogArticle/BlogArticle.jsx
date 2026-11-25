export default function BlogArticle({Data:{image ,content , date , featured, excerpt ,readTime ,title , author:{
  avatar , name ,  role
} }}) {
  

  return (
    <>
    <div className=" mb-5">    
       <article className="group max-w-screen-xl mx-auto relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500" >

  
        
        <a href="" className="block"> 
          
          <div className="grid md:grid-cols-2 gap-0" > 
            
            <div className="relative h-72 md:h-[400px] overflow-hidden">
<img src={image} alt=""  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" ></div>
{featured&&<div className="absolute top-4 right-4"> <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
  <i class="fa-solid fa-star w-3.5 h-3.5"></i>
  مميز
  </span> </div>}
            </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]" >
          <div className="flex items-center gap-3 mb-4"> <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
          
          إضاءة
          
          </span>   
          
          <span className="flex items-center gap-1 text-sm text-neutral-500">
<i class="fa-solid fa-clock w-4 h-4"></i>

          {readTime}
          </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">


    {title}
          </h2>
          <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed" >     {excerpt}   </p>


          <div className="flex items-center justify-between mt-auto"> 
<div className="flex items-center gap-3"> <div className="relative"> <img src={avatar} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md" alt="" />  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div> </div>


<div >
  <p className="text-sm font-semibold text-white">  {name}</p>
  <p className="text-xs text-neutral-500">  {date}</p>
</div>

</div>
<span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300"> 
اقرأ المقال
<i class="fa-solid fa-arrow-right w-5 h-5 rotate-180" ></i>

</span>

          </div>
           </div>
        
             </div>
           </a>
           
      
    

      </article></div>
      
    </>
  )
}
