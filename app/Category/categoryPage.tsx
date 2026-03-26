import { useState } from 'react';
import { CategoryLinks, DuasImportanceLinks } from '@/constant/Category';
import { Input } from '@/components/ui/input';

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getSubItems = (category: string) => {
    if (category === "Dua's Importance") {
      return (
        <ul className="mt-2 ml-4 space-y-2">
          {DuasImportanceLinks.map((sub) => (
            <li key={sub.id} className="text-gray-400">
              {sub.title}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        {/* Navbar */}
      </div>

      <div className="fixed h-screen w-1/4 border border-white mt-10">
        <div className="flex flex-col px-2 py-2 font-medium text-medium">
          <Input
          type="text"
          placeholder="🔍 Search..."
          className="w-80 m-4 border-rounded border-gray-900 bg-white dark:bg-black dark:text-white dark:border-gray-700 dark:placeholder-gray-400"
            />
          {CategoryLinks.map((catlink) => {
            const isActive = activeCategory === catlink.title;
            return (
              <div key={catlink.id}>
                <button
                  type="button"
                  onClick={() => setActiveCategory((prev) => (prev === catlink.title ? null : catlink.title))}
                  className="w-full text-left cursor-pointer p-1 flex items-center gap-2"
                >
                  <span className={`${isActive ? "text-emerald-600": ""}`}>{catlink.title}</span>
                </button>
                {isActive && getSubItems(catlink.title)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage