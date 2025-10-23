export default function About() {
  return (
    // <section id="about" className="relative min-h-screen">
    //   <div className="absolute top-12 left-12">
    //     <h2 className="text-6xl font-bold tracking-tight mb-12 tracking-wider">
    //       ABOUT
    //     </h2>
    //     <div className="h-[1px] w-[calc(100vw-6rem)] bg-[#3A3A3A] my-8" />

    //     <div className="grid md:grid-cols-2 gap-12">
    //       <div> {/* 왼쪽 강조 텍스트 */} </div>
    //       <div> {/* 오른쪽 소개글 */} </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="w-full px-12 py-24">
      {/* 전체 콘텐츠 wrapper */}
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <h2 className="text-[64px] font-bold tracking-wide leading-none">
          ABOUT
        </h2>

        {/* 아래 선 */}
        <hr className="border-t border-[#3A3A3A] mt-4 mb-20" />

        {/* 좌우 2열 레이아웃 */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 왼쪽 강조 텍스트 */}
          <div className="text-3xl font-medium leading-relaxed text-gray-300">
            Over the years, I have worked on customer-facing products with a
            strong focus on excellent user experience and accessibility
          </div>

          {/* 오른쪽 설명 */}
          <div className="text-base text-gray-400 space-y-6 leading-relaxed">
            <p>
              Self-taught software engineer with a strong knowledge of
              TypeScript, Swift, and Java. I am passionate about working on
              meaningful projects that have a positive impact on people's lives.
            </p>
            <p>
              I have hands-on experience working on high-traffic,
              customer-facing products and prioritize building clean,
              maintainable codebases that enable continuous improvement and
              scalability.
            </p>
            <p>
              I hold a Bachelor of Business Administration from Hult
              International Business School in London and an International
              Baccalaureate from Leysin American School in Switzerland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
