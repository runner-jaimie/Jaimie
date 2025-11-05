export default function Experience() {
  return (
    <section id="experience" className="w-full px-12 py-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <h2 className="text-[64px] font-bold tracking-wide leading-none">
          EXPERIENCE
        </h2>

        {/* 아래 선 */}
        <hr className="border-t border-[#3A3A3A] mt-4 mb-20" />

        {/* 전체 3열 레이아웃 */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* 왼쪽 회사명 및 소개 */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-200">TDSB</h3>
            <p className="text-sm text-gray-400 mt-2">
              Toronto District School Board
            </p>
            <p className="text-sm text-gray-400 mt-1">2023 — Present</p>
          </div>

          {/* 가운데 상세 항목 */}
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex">
              <span className="w-24 text-gray-500">Position</span>
              <span>Junior Developer</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-500">Location</span>
              <span>Toronto, Canada</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-500">Industry</span>
              <span>Education</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-500">Website</span>
              <a
                href="https://www.tdsb.on.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-teal-300 transition"
              >
                www.tdsb.on.ca ↗
              </a>
            </div>
          </div>

          {/* 오른쪽 설명 */}
          <div className="text-base text-gray-400 space-y-6 leading-relaxed">
            <p>
              During my 1-year co-op at the Toronto District School Board
              (TDSB), I developed internal tools using C#, ASP.NET, and MSSQL to
              streamline content workflows.
            </p>
            <p>
              As a junior developer, I handled various website requests and
              collaborated closely with senior developers to maintain SQL
              procedures and backend systems.
            </p>
            <p>
              I also contributed to improving internal user interfaces and
              provided support for content administrators across multiple
              departments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
