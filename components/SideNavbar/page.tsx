import { SideNavLinks } from "@/constant/NavLink";
import Image from "next/image";
import Link from "next/link";

export function SideNavbar(){
  return (
    <div className="overflow-visible flex flex-col px-4 fixed h-full border bg-gray-900 z-10000 transition-all">
        <div className="top-0">
            {/*Top Logo */}
            <Image src="/logo.jpg" alt="SideLogo" width={40} height={40}/>
        </div>

        <div className="space-y-6 flex flex-col items-center mt-50">
            {SideNavLinks.map((sidelink) => {
                const Icon = sidelink.icon;
                return (
                    <Link key={sidelink.id} href={sidelink.url} className="cursor-pointer relative group">
                        <Icon className="group-hover:bg-emerald-900 "/>
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm bg-white text-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-1000 whitespace-nowrap">
                            {sidelink.name}
                        </span>
                    </Link>
                );
            })}
            {/* Icon Navlinks */}
        </div>

        <div>
            {/* Menu bar */}
            {/* <Link ></Link> */}
        </div>
    </div>
  )
}

