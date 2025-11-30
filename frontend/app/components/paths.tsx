import { BarChart, ArrowLeft } from "lucide-react";
import { IoBookOutline } from "react-icons/io5";

import { foundationsOfCPath } from "./path";
import Link from "next/link";

export function PathsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-40 h-40 bg-[#FF9800] absolute top-20 -right-20 rounded-full opacity-60 mix-blend-multiply z-0"></div>
      <div className="w-24 h-24 bg-[#003366] absolute -bottom-10 left-10 rounded-full opacity-40 mix-blend-multiply z-0"></div>
      <div className="w-32 h-32 bg-[#FF9800] absolute top-20 -left-16 rounded-full opacity-30 mix-blend-multiply z-0 rotate-45 transform"></div>
      <div className="w-36 h-36 bg-[#e6900f] absolute top-80 left-40 rounded-full opacity-30 mix-blend-multiply z-0 rotate-45 transform"></div>
      <div className="w-28 h-28 bg-[#003366] absolute bottom-40 -right-10 rounded-full opacity-20 mix-blend-multiply z-0"></div>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-black text-center mb-16">
          جميع مساراتنا التعليمية
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <PathCard path={foundationsOfCPath} />
          <SooPathCard />
        </div>
      </div>
    </section>
  );
}
type Path = {
  name: string;
  shortDescription: string;
  coursesNumber?: number;
};

function PathCard({ path }: { path: Path }) {
  return (
    <div className="border border-gray-100 text-right p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
        <IoBookOutline className="w-full h-full object-cover text-[#003366]" />
      </div>

      <h3 className="text-2xl font-bold text-[#003366] mb-2">{path.name}</h3>
      <hr className="border-gray-300 mb-4" />
      <p className="text-gray-600 mb-6 text-base">{path.shortDescription}</p>

      <div className="flex justify-between items-center text-gray-700 border-t pt-4 mt-auto">
        <div className="flex items-center gap-1 text-sm">
          <BarChart className="w-4 h-4 text-[#FF9800]" />
          <span>{path.coursesNumber || 0} دورات</span>
        </div>
      </div>

      <Link
        href="paths/C-Course"
        className="p-3 mt-6 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition duration-300 flex items-center justify-center font-semibold"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> أستكشف المسار
      </Link>
    </div>
  );
}

function SooPathCard() {
  return (
    <div className="border border-gray-100 text-right p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
        <IoBookOutline className="w-full h-full object-cover text-[#003366]" />
      </div>

      <h3 className="text-2xl font-bold text-[#003366] mb-2">
        DATA STRUCTURES AND ALGORITHMS(DSA)
      </h3>
      <hr className="border-gray-300 mb-4" />
      <p className="text-gray-600 mb-6 text-base">cumming soon...</p>

      <div className="flex justify-between items-center text-gray-700 border-t pt-4 mt-auto">
        <div className="flex items-center gap-1 text-sm">
          <BarChart className="w-4 h-4 text-[#FF9800]" />
          <span>{0} دورات</span>
        </div>
      </div>

      <Link
        href="paths/C-Course"
        className="p-3 opacity-50 mt-6 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition duration-300 flex items-center justify-center font-semibold"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> أستكشف المسار
      </Link>
    </div>
  );
}
