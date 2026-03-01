"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/app/theme-toggle"

const HomePage = () => {
  const { setTheme } = useTheme()
  return (
    <div className="w-full h-screen">
      <div className="flex mt-35 text-center text-5xl font-bold items-center justify-center">
        <h1 className="text-emerald-800">🌙 RAMADAN KAREEM 2026 </h1>
      </div>
      
      <div className="items-center justify-center">
        <h4 className="font-bold"> 
          </h4>
      </div>
  </div>)
}

export default HomePage