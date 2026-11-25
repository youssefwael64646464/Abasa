
export default function BlogHero() {


  
  return (
    <>
      <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف
              <span className="Blog-text mx-7">مقالاتنا</span>
            </h2>
            <p className="text-xl text-neutral-400  mx-auto">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
          </div>
        </div>
      
    </>
  )
}
