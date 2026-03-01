"use client";
import { NavLinks } from '@/constant/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input';

const Navbar = () => {
  return (
    <div className="overflow-hidden fixed top-0 left-0 w-full h-[12vh] flex items-center px-4 bg-white z-[10000] transition-all duration-200">
      <Image src="/logo.jpg" alt="logo" height={40} width={40} />

      <div className="relative">
        <h6 className="ml-3 text-black text-md font-bold">
        Dua <span className="text-emerald-600">&</span> Ruqyah
        </h6>
        <p className="text-gray-600 ml-3">Hisnul Muslim</p>
      </div>

      {/* center: nav links */}
      <div className=" flex-1 flex items-center justify-center space-x-6 text-gray-800">
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-emerald-600 cursor-pointer">
            {link.name}
          </Link>
        ))}
      </div>

      {/* right: future content placeholder */}
      <div className="flex items-center space-x-4">
        {/* put right-side items here */}
        <Button className="px-6 py-2 text-sm md:text-md text-white font-bold bg-emerald-600 cursor-pointer border-rounded hover:text-black hover:bg-emerald-600"><Link href="/login">LogIn</Link></Button>
      
        <Input
          type="text"
          placeholder="Search..."
          className="w-full border-rounded border-emerald-700 bg-white "
        />
        </div>
    </div>
  )
}

export default Navbar