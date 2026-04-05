"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { Button } from "../ui/button"

const HomePage = () => {
  const [count, setCount] =useState(0)
  const [value, setValue ] =useState("")

  useEffect(() => {
    console.log("UseEffect")
  }, [count])

  useLayoutEffect(() => {
    console.log("UseLayoutEffect ")
  }, [count])
  return (
    <div className="w-full h-screen">
      <div className="flex mt-35 text-center text-5xl font-bold items-center justify-center">
        <h1 className="text-emerald-800">🌙 RAMADAN KAREEM 2026 </h1>
      </div>
      <div className="text-center justify-center items-center flex flex-col"> 
        <form className="justify-between max-w-500px scale-75 sm:scale-100 mx-auto mt-10 border border-emerald-800 rounded-2xl hover:shadow-[-7px_7px_0px]" action=""><input type="email" placeholder="Enter your Email" className="text-lg m-2 px-2 outline-none"/>
          <Button type="submit" className="m-2 cursor-pointer right-0 border rounded-b-2xl ">Subscribe</Button>
        </form>
      </div>
  </div>)
}

export default HomePage