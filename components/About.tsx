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
            I'm a passionate developer from the vibrant city of Toronto,
            Canada.🇨🇦 <br />
            Believer in the power of technology to spark positive change.✨{' '}
            <br />
            Let’s innovate, collaborate, and build meaningful experiences
            together.🚀
          </div>

          {/* 오른쪽 설명 */}
          <div className="text-base text-gray-400 space-y-6 leading-relaxed">
            <p>
              During my 1-year co-op at the Toronto District School Board
              (TDSB), I contributed to the development of internal CMS modules
              using C#, ASP.NET, and MSSQL, helping improve content workflows
              for thousands of users.
            </p>
            <p>
              As a junior developer, I handled many incoming website requests
              and worked closely with senior engineers to maintain and optimize
              SQL procedures and backend systems.
            </p>
            <p>
              This experience deepened my understanding of scalable development,
              accessibility standards (WCAG 2.0 / AODA), and the importance of
              cross-functional collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
