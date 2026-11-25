import {useState} from "react";
import logo from "../../assets/logo-GdqARQRt.png"
import { Link ,NavLink } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
    <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">  <img src={logo} className="w-full h-full object-cover" alt="Flowbite Logo" /></div>
      <div className="flex flex-col"><span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
        عدسة
      </span>
      <span className="text-xs text-orange-400/80  hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span></div>
    </Link>
    <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link to={"blog"} type="button" className="hidden md:flex items-center gap-3 btn-primary text-sm cursor-pointer  text-white rounded-full ">
ابدأ القراءة      </Link>
      <button onClick={()=>setIsOpen(!isOpen)} data-collapse-toggle="navbar-cta" type="button" className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]" aria-controls="navbar-cta" aria-expanded={isOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      </button>
    </div>
  <div
  id="navbar-cta"
  className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
>
  <ul className="mt-4 flex flex-col items-center gap-2 bg-[#161616] rounded-2xl p-3 border border-[#262626] md:mt-0 md:flex-row md:gap-0 md:rounded-full md:p-1.5">

    <li>
      <NavLink
        to="/"
        className="block px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white"
      >
        الرئيسية
      </NavLink>
    </li>

    <li>
      <NavLink
        to="blog"
        className="block px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white"
        
      >
        المدونة
      </NavLink>
    </li>

    <li>
      <NavLink
        to={"about"}
        className="block px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white"
      >
        من نحن
      </NavLink>
    </li>

  </ul>
</div>
  </div>
</nav>

    </>
  );
}
