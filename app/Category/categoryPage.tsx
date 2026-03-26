import { CategoryLinks } from '@/constant/Category'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div>
      <div>
        {/* Navbar */}
      </div>

      <div className="absolute">
        <div className="px-2 py-2 font-medium text-medium">
          {CategoryLinks.map((catlink) => (
            <Link key={catlink.id} href={catlink.url}>{catlink.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage