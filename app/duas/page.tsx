"use client";
import { RightPanel } from "@/components/RightPanel/page";
import { SideNavbar } from "@/components/SideNavbar/page";

export default function DuasPage() {
  return (
    <div className="absolute">
        <SideNavbar/>
        <div className="ml-20">SearchCategory 
        </div>
        <div className="ml-20">Category Page</div>
        <div className="right-0 fixed overflow-hidden mt-10 border border-emerald-700 h-full py-12 z-50 bg-gray-900 w-72"><RightPanel /></div>
        
    </div>
  )
}
