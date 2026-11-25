

export default function AboutUs() {
  return (
    <>
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 opacity-30">

        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]">
        </div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label inline-flex items-center gap-2 mb-8  rounded-full" >
      <span className="relative flex h-2 w-2" >

<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" ></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" ></span>

      </span>
      <span className="text-sm font-medium text-neutral-300 "> من نحن   </span>
    
    </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" >
            مهمتنا هي 
           
           <br />
             
             <span className="gradient-text pt-2">
        الإعلام والإلهام    </span>   
           </h1>
           <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
             نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
           </p>
      </div>
    </div>
    </>
  )
}
