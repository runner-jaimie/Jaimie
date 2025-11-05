export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen px-12 py-24">
      {/* 섹션 타이틀 */}
      <h2 className="text-6xl font-bold tracking-tight mb-12 text-gray-100">
        EXPERIENCE
      </h2>
      <hr className="border-t border-[#3A3A3A] mb-12" />

      {/* 경험 항목들 */}
      <div className="space-y-20">
        {/* ✅ TDSB 경험 */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* 왼쪽: 회사 정보 */}
          <div className="text-gray-400 space-y-2">
            <h3 className="text-4xl font-semibold text-white">TDSB</h3>
            <p>Toronto District School Board</p>
            <p>Jan 2024 — Dec 2024</p>
          </div>

          {/* 가운데: 직무 디테일 */}
          <div className="text-gray-400 space-y-2">
            <p>
              <span className="text-white font-medium">Position:</span> Junior
              Developer
            </p>
            <p>
              <span className="text-white font-medium">Location:</span> Toronto,
              Canada
            </p>
            <p>
              <span className="text-white font-medium">Industry:</span>{' '}
              Education
            </p>
            <p>
              <span className="text-white font-medium">Website:</span>{' '}
              <a
                href="https://www.tdsb.on.ca"
                className="underline hover:text-purple-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.tdsb.on.ca ↗
              </a>
            </p>
          </div>

          {/* 오른쪽: 설명 */}
          <div className="text-gray-400 space-y-4">
            <p>
              As a junior developer at Canada’s largest school board, I
              contributed to various internal platforms used by educators and
              administrators across Toronto.
            </p>
            <p>
              I implemented new features, resolved bugs, and collaborated with
              cross-functional teams to enhance accessibility and usability.
            </p>
          </div>
        </div>

        {/* 👉 이후 다른 경험 추가하고 싶으면 여기 밑에 또 <div className="grid md:grid-cols-3 ..."> 만들어서 계속 추가하면 돼 */}
      </div>
    </section>
  );
}
