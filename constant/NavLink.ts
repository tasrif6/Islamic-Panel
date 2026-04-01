import { BadgeInfo, Menu, BookmarkMinus, BookOpenText, ClipboardPlus, Copyright, DiamondPercent, House, Info, LayoutGrid, MessageCircleMore, MessageSquareQuote, Moon, Projector, ShieldAlert, Sunset,  } from "lucide-react";

export const NavLinks = [
    {
        id: 1,
        url:"/duas-categories",
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
    },
]

export const MenuLinks = [
    {
        id:1,
        icon: Sunset,
        name: "Prayer Name",
    },
    {
        id:2,
        icon: LayoutGrid,
        name:"Duas",
    },
    {
        id: 3,
        icon: BookOpenText,
        name: "Books",
    },
    {
        id: 4,
        icon: Moon,
        name: "Ramadan 2026",
    },
    {
        id: 5,
        icon: Info,
        name: "Dua Info",
    },
    {
        id: 6,
        icon: BadgeInfo,
        name: "About Us",
    },
    {
        id: 7,
        icon:LayoutGrid,
        name:"Prayer",
    },{
        id:8,
        icon: Copyright,
        name:"Copyright",
    },{
        id:9,
        icon: MessageCircleMore,
        name:"Contact Us",
    },{
        id:10,
        icon: MessageSquareQuote,
        name:"Thanks & Credits",
    },{
        id:11,
        icon: ShieldAlert,
        name:"Privacy Policy",
    },{
        id:12,
        icon: Projector,
        name:"Our Projects",
    },
]

