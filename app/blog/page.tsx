"use client"
import Navbar from '@/components/Home/Navbar'
import { LightDark } from '@/components/light-dark'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { assets } from '@/constant/blog'
import Image from 'next/image'
import { useState } from 'react'
import BlogItemPage from './../../components/BlogItems/blogItemPage';

const blogPage = () => {
    const [value, setValue] =useState("")
    const [count,setCount ] =useState(0)
  return (
    <div className="dark:bg-black blue:bg-blue-900">
      <div><Navbar/></div>

      <div className="mt-30  flex flex-col justify-center items-center">
        <Image src={assets.logo} alt="Blogger Logo" width={180} height={180}/>
        
      </div>
      <div className="text-center justify-center items-center flex flex-col"> 
        <form className="justify-between max-w-500px scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-2xl hover:shadow-[-7px_7px_0px]" action=""><input type="email" placeholder="Enter your Email" className="text-lg m-2 px-2 outline-none"/>
          <Button type="submit" className="m-2 cursor-pointer right-0 border rounded-b-2xl ">Subscribe</Button>
        </form>
      </div>

      {/* Blog Lists */}
      <div className="border outline-none mt-10 ml-4 px-2 inline-block"><BlogItemPage /></div>

      {/* <div className="items-center justify-center mt-30 m-4 ">
            <h4 className="font-bold text-center text-4xl"> Learning Hooks:</h4>
                <div className="flex font-bold space-x-4 gap-2 text-2xl text-center py-4"> <input type="text" placeholder="Type Anything..." value={value} onChange={(e) => setValue(e.target.value)} className="w-80"/>
                <p >You typed : <strong>{value}</strong></p></div>
                <div className="flex flex-col font-bold space-x-4 gap-2 text-2xl text-center py-4">Count Increment: <Button onClick={() => setCount(count+1)}>Count</Button>
                <span>You clicked: {count} times</span>
                </div>
              <button className="text-center"><LightDark/>  </button>   */}
        {/* </div> */}
    </div>
  )
}
export default blogPage