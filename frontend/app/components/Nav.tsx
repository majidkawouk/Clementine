export default function NavBar() {
  return (
    <nav className="fixed right-40 top-30 w-52 bg-[#001D33] p-4 rounded-l-lg shadow-2xl border-r-4 border-[#FF9800] hidden 2xl:block z-10">
      <h3 className="text-xl font-bold text-[#FF9800] mb-4 border-b border-[#FF9800]/50 pb-2">
        جدول المحتويات
      </h3>
      <ul className="space-y-3">
        <li>
          <a
            href="#1"
            className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
          >
            مقدمة
          </a>
        </li>
        <li>
          <a
            href="#2"
            className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
          >
            نظرة عامة
          </a>
        </li>
        <li>
          <a
            href="#3"
            className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
          >
            التفاصيل
          </a>
        </li>
        <li>
          <a
            href="#4"
            className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
          >
            الواجب
          </a>
        </li>
      </ul>
    </nav>
  );
}
