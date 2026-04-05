import { blog_data } from "@/constant/blog"
import { useState } from "react"
import BlogItemPage from "./blogItemPage"

const BlogListPage = () => {
    const [menu, setMenu ] =useState("All")
  return (
    <div className="items-center justify-center">
        <div className="flex justify-center items-center gap-8 lg:text-lg md:text-lg sm:text-md mb-10 rounded-xl w-auto ">
            <button onClick={() => setMenu("All")} className = {menu === "All" ? 'bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-2xl cursor-pointer' : 'cursor-pointer hover:bg-black hover:text-white rounded-2xl px-4 py-2' }>All</button>
            <button onClick={() => setMenu("Technology")} className= { menu ==="Technology" ? 'bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-2xl cursor-pointer' : 'cursor-pointer hover:bg-black hover:text-white rounded-2xl px-4 py-2' }>Technology</button>
            <button onClick={() => setMenu("Startup")} className= { menu ==="Startup" ? 'bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-2xl cursor-pointer' : 'cursor-pointer hover:bg-black hover:text-white rounded-2xl px-4 py-2' }>Startup</button>
            <button onClick={() => setMenu("Lifestyle")} className= { menu ==="Lifestyle" ? 'bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-2xl cursor-pointer' : 'cursor-pointer hover:bg-black hover:text-white rounded-2xl px-4 py-2' }>Lifestyle</button>
        </div>
        <div className="flex flex-wrap gap-4 gap-y-10 space-x-6 items-center justify-center mb-16 mx-24">
            { blog_data.filter((item) => menu==="All" ? true : item.category === menu).map((item, index) => {
                return <BlogItemPage key={index} id ={item.id} image={item.image} title={item.title} category={item.category} description = {item.description}/> 
            })}
        </div>
    </div>
  )
}

export default BlogListPage