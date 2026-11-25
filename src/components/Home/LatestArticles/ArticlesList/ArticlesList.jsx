import { Link } from "react-router-dom"
export default function ArticlesList({
  Data: {
    date,
    excerpt,
    image,
    readTime,
    title,
    category,slug ,
    author: { avatar, name, role }
  }
}) {
  return (
    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden">

      <Link to={`/blog/${slug}`} className="flex flex-col md:flex-row">

        <div className="relative w-full md:basis-1/4 md:w-1/4 h-52 md:h-56 flex-shrink-0 overflow-hidden">

          <img
            src={image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={title}
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>

        <div className="basis-3/4 flex-1 p-6 flex flex-col justify-center">

    
          <div className="flex flex-wrap items-center gap-3 mb-3">

            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
              {category}
            </span>

            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-clock w-4 h-4"></i>
              {readTime}
            </span>

            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-calendar w-4 h-4"></i>
              {date}
            </span>

          </div>

    
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>

          <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">

            <div className="flex items-center gap-3">

              <img
                src={avatar}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                alt={name}
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  {name}
                </p>

                <p className="text-xs text-neutral-500">
                  {role}
                </p>
              </div>

            </div>

            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              اقرأ المقال
              <i className="fa-solid fa-arrow-right w-5 h-5 rotate-180"></i>
            </span>

          </div>

        </div>

      </Link>

    </article>
  )
}
