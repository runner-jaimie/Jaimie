export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center py-6 bg-[#021D1D] backdrop-blur-sm">
      <div className="flex items-center space-x-6 text-sm tracking-wide text-white/80">
        <a href="#about" className="hover:text-[#63F3E6] transition">
          About
        </a>
        <span className="text-white/40">•</span>
        <a href="#experience" className="hover:text-[#63F3E6] transition">
          Experience
        </a>
        <span className="text-white/40">•</span>
        <a href="#project" className="hover:text-[#63F3E6] transition">
          Projects
        </a>
      </div>
    </nav>
  );
}
