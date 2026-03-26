import { DuasImportanceLinks } from "@/constant/Category";
import Link from "next/link";

const DuasImportance = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Duas Importance</h1>
      <ul className="space-y-2">
        {DuasImportanceLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.url || "/Category/DuasImportance"}
              className="text-blue-600 hover:underline"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DuasImportance;
