import { BookmarkMinus, ClipboardPlus, DiamondPercent, House, LayoutGrid,  } from "lucide-react";

export const NavLinks = [
    {
        id: 1,
        url:"/duas",
        name: "Duas",
    },
    {
        id: 2,
        url: "/ruqyah",
        name: "Ruqyah",
    },
    {
        id: 3,
        url: "/prayertime",
        name: "Prayer Time",
    },
    {
        id: 4,
        url: "/ramadan",
        name: "Ramadan 2026",
    },
    {
        id: 5,
        url: "/blog",
        name: "Blog",
    },
]

export const SideNavLinks =[
    {
        id: 1,
        url:"/",
        icon: House,
        name: "Home",
    },
    {
        id:2,
        url: "/category",
        icon: DiamondPercent,
        name:"Category",
    },
    {
        id: 3,
        url:"/dua",
        icon: LayoutGrid,
        name:"Dua",
    },
    {
        id: 4,
        url:"/bookmarks",
        icon: BookmarkMinus,
        name:"Bookmarks",
    },
    {
        id: 5,
        url: "/ruqyah",
        icon: ClipboardPlus,
        name:"Ruqyah",
    }
]

