import CategoriesCard from "./CategoriesCard/CategoriesCard";

export default function Categories({ categories }) {
  const icon = ["fa-sun", "fa-user", "fa-mountain-sun", "fa-sliders", "fa-sun"];

  return (
    <>
      <section className="py-24  bg-[#111111] relative border-y border-[#262626]">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className=" font-bold text-5xl text-white">
              استكشف حسب الموضوع
            </h2>

            <p className=" max-w-lg mx-auto text-lg text-[#a1a1a1] mt-8">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {" "}
            {categories.map((categorie, index) => (
              <CategoriesCard
                icon={icon}
                key={index}
                index={index}
                categories={categorie}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
