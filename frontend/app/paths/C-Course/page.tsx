import { foundationsOfCPath } from "@/app/components/path";
import { IoBookOutline } from "react-icons/io5";
import { LibraryBig } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div
      className="flex w-full flex-col items-center py-10 px-4 md:px-8"
      dir="rtl"
    >
      <div className="flex flex-col items-center mb-10">
        <div className="flex justify-center bg-[#FF9800] p-7 rounded-full mb-4 shadow-lg">
          <IoBookOutline className="w-16 h-16 text-[#1a4672] md:w-20 md:h-20" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          {foundationsOfCPath.name}
        </h1>
      </div>

      <hr className="" />

      <div className="max-w-3xl w-full mb-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-right">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          نظرة عامة (Overview)
        </h2>
        <p className="text-base text-gray-600 mb-3 leading-relaxed">
          {foundationsOfCPath.shortDescription}
        </p>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
          {foundationsOfCPath.fullDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-gray-500">
          **عدد الوحدات:** {foundationsOfCPath.modules.length} وحدة دراسية
        </p>
      </div>

      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-5 text-gray-700 text-right">
          الوحدات والمحتوى (Modules)
        </h2>

        {foundationsOfCPath.modules.map((module, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-xl shadow-md border border-gray-100"
          >
            <Link
              href={module.link}
              className="p-4 text-xl font-semibold text-gray-800 text-right"
            >
              <span className="flex items-center  justify-start hover:text-[#FF9800] transition duration-150 cursor-pointer">
                <LibraryBig className="w-6 h-6 ml-3 " />
                {module.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
