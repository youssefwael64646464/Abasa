export default function BlogButton({name ,activeButton ,handleCategoryChange}) {


  return (
    <>


    <button onClick={() => handleCategoryChange(name.name)}  className={
  activeButton === name.name
    ? "active px-4 py-2 rounded-xl text-sm  cursor-pointer font-medium transition-all duration-300 bg-orange-500 text-white border border-orange-500"
    : "px-4 py-2 rounded-xl text-sm font-medium  cursor-pointer transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}>
    
    {name.name}
    </button>
      
    </>
  )
}
