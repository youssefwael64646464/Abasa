import { Link } from "react-router-dom"
export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]" >

<div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" ></div>
<div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" ></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" ></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" >
  <div className="text-center max-w-4xl mx-auto" >
    <div className="section-label inline-flex items-center gap-2 mb-8  rounded-full" >
      <span className="relative flex h-2 w-2" >

<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" ></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" ></span>

      </span>
      <span className="text-sm font-medium text-neutral-300 "> مرحباً بك في عدسة   </span>
    </div>
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">

      اكتشف 
      <span className="text-header mx-4">فن</span>
      <br />
      التصوير الفوتوغرافي
    </h1>

<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 " >
   <Link to={"blog"}  className="btn-primary  rounded-full text-white inline-flex items-center justify-center gap-2 group" >
  <span>استكشف المقالات</span>

<i className="fa-solid fa-arrow-right w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
</Link>  


 <Link to={"about"} className="btn-secondary inline-flex items-center justify-center gap-2 text-white rounded-full">  <i class="fa-solid fa-circle-info"></i> <span>اعرف المزيد</span></Link> </div>
  
    
    </div>  </div> 

  </section>
  
      
    </>
  )
}
