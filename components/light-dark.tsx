"use client"
import { useTheme } from "next-themes"

export function LightDark(){
    const { theme, setTheme } = useTheme();
    console.log(theme)
    return (
        <select value={theme} onChange={e => setTheme(e.target.value)} className="dark:bg-black dark:text-white text-black">
            <option value="system">System</option>
            <option value="dark" >Dark</option>
            <option value="light">Light</option>
            <option value="blue" onClick={() => setTheme("blue")}>Blue</option>
        </select>
    )
}