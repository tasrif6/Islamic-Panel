import { blog_data } from "@/constant/blog"
import Image from "next/image"

const BlogItemPage = () => {
  return (
    <div>
        <Image src={blog_data[0].image} alt="" width={400} height={500} className="border outline-none"/>
    </div>
  )
}

export default BlogItemPage