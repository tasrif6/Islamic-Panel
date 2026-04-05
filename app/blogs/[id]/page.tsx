const BlogsIdPage = async ({params}) => {

  const {id} = await params
  return (
    <div className="m-20 text-black">{}</div>
  )
}

export default BlogsIdPage