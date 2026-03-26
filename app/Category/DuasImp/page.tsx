import { DuasImportanceLinks } from "@/constant/Category";
import Link from "next/link";

const DuasImportance = () => {
  return (
    <div>
        {DuasImportanceLinks.map((link) => (
           <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
    
    </div>
  )
}

export default DuasImportance;