export default function Navbar() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col items-center justify-center h-full p-6 space-y-12">
      {/* 로고 */}
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={handleScrollTop}
      >
        Logo
      </div>

      {/* 메뉴 */}
      <ul className="space-y-8 text-xl text-gray-700">
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-500">
            Experience
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-blue-500">
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
}
