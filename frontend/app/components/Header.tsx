import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full p-4 shadow-lg flex justify-between items-center bg-[#003366]">
      <div className="flex items-center">
        <Image
          src={"/tangerine.png"}
          alt="Tangerine logo"
          width={48}
          height={48}
          className="w-12 h-12 text-white"
        />

        <Link href="/" className="font-extrabold text-xl md:text-3xl text-[#FF9800]">
          Clementine
        </Link>
      </div>

      <div className="flex items-center gap-6 text-white text-base font-semibold">
        <Link
          href="/paths"
          className="hover:text-gray-300 transition duration-150 relative group"
        >
          جميع المسارات
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF9800] transform origin-right scale-x-0  transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href={"/paths/C-Course/0"}
          className="hover:text-gray-300 transition duration-150 relative group"
        >
          حول/عنّا
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF9800] transform origin-right scale-x-0  transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        
       
        <Link href={"/paths"} className="py-2 px-4 rounded-lg font-bold transition text-black duration-300 shadow-md bg-[#FF9800] hover:bg-[#af7010]">
          ابدأ الآن
        </Link>
      </div>

     
    </header>
  );
}
