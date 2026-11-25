export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <a href="" className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>
                <span className="text-xl font-bold text-white">عدسة</span>
              </a>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              <div className="flex gap-2">
                <a
                  href="https://github.com/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {" "}
                  <i className="fa-brands fa-square-x-twitter"></i>{" "}
                </a>
                <a
                  href="https://linkedin.com/company/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin"></i>{" "}
                </a>
                <a
                  href="https://youtube.com/@adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {" "}
                  <i className="fa-brands fa-youtube"></i>{" "}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف{" "}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    الرئيسية
                  </a>{" "}
                </li>

                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    المدونة
                  </a>{" "}
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    من نحن
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات{" "}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    إضاءة
                  </a>{" "}
                </li>

                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    بورتريه
                  </a>{" "}
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    مناظر طبيعية
                  </a>{" "}
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left-long w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    تقنيات{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                {" "}
                <div className="relative">
                  {" "}
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                  />
                </div>{" "}

                <button type="submit"  className="w-full btn-primary text-sm rounded-full cursor-pointer" > اشترك</button>
              </form>
            </div>
          </div>
        <div className="relative border-t border-[#262626]" >  <div className="px-4 py-6  md:flex md:items-center md:justify-between">
            <span className="text-sm text-body sm:text-center">
            © 2026 عدسة. صنع بكل <i className="fa-solid text-orange-500 fa-heart"></i> جميع الحقوق محفوظة.


            </span>

          <div className="flex gap-6">
            <a href="" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية</a>
          
              <a href="" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">شروط الخدمة</a>
          
          </div>
          </div></div>
        </div>
      </footer>
    </>
  );
}
