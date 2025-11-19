export default function Footer() {
  return (
    <section id="footer" className="w-full px-12 mt-40">
      {/* === Projects 섹션과 동일한 border line === */}
      <hr className="border-t border-[#3A3A3A] mt-4 mb-20" />

      <div className="max-w-[1280px] mx-auto pb-24">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
          <h2 className="text-5xl font-light text-gray-200">
            Let’s Collaborate
          </h2>

          <a
            href="mailto:jlee723@myseneca.ca"
            className="text-2xl font-light text-gray-300 border-b border-gray-500 hover:text-white hover:border-white transition mt-10 md:mt-0"
          >
            jlee723@myseneca.ca
          </a>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-500">
            © Jaimie Lee {new Date().getFullYear()}
          </p>

          <div className="flex space-x-10 mt-8 md:mt-0">
            <a
              href="https://github.com/runner-jaimie"
              target="_blank"
              className="footer-link text-sm text-gray-300 hover:text-white transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/imjm/"
              target="_blank"
              className="footer-link text-sm text-gray-300 hover:text-white transition"
            >
              LinkedIn ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="footer-link text-sm text-gray-300 hover:text-white transition"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
