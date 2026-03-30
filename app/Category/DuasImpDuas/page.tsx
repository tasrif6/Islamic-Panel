import { DuasSubCat01 } from "@/constant/Duas"
import Link from "next/link"
import { useState } from "react"

const Duas = () => {
  const [isActive, setActive ] = useState(false)

  return (
    <div className="relative">
        <div className="flex ">
            {DuasSubCat01.map((link) => (
                <Link key={link.id} href={link.url} className="text-gray-400" onClick={() =>setActive(!isActive)}>
                  {isActive && (
                    <div><h3 className="text-xl text-emerald-800">Section- {link.id} {link.title}</h3></div>
                  )}
                </Link>
            ))}
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Duas