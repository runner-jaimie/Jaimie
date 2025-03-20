import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <section
        id="about"
        className="flex items-center min-h-screen p-8 bg-white"
      >
        {/* 왼쪽 설명 */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Hi! I'm <span className="text-orange-500">Jaimie</span>,<br />a
            Frontend Developer.
          </h1>
          <p className="text-gray-700">
            Skilled in JavaScript, React, TypeScript, HTML5, CSS3, and SASS.
            <br />
            Passionate about building beautiful web apps and user experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-500">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500">
              Email
            </a>
          </div>
        </div>

        {/* 오른쪽 사진 + 말풍선 */}
        <div className="relative flex justify-center w-1/2">
          {/* 말풍선 + 다운로드 링크 */}
          <a
            href="/resume.pdf"
            download
            className="absolute cursor-pointer -top-32 -right-10"
          >
            <Image
              src="/bubble_resume.gif"
              alt="Resume Speech Bubble"
              width={250}
              height={250}
            />
          </a>

          {/* 프로필 사진 자리 */}
          <div className="bg-gray-300 rounded-lg shadow-lg w-96 h-96">
            Profile Photo Here
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="min-h-screen p-8 bg-gray-100">
        <h2 className="mb-4 text-3xl font-bold">Experience</h2>
        <p>
          I have experience with React, TypeScript, and backend technologies
          like Node.js.
        </p>
      </section> */}
      <section className="max-w-4xl py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold">EXPERIENCE</h2>

        <div className="space-y-8">
          {/* 1st */}
          <div className="grid grid-cols-4 gap-8 p-8 transition duration-300 bg-gray-100 group hover:bg-gray-200 rounded-xl">
            {/* 기간 */}
            <div className="col-span-1 text-sm font-semibold text-gray-500">
              2024 — PRESENT
            </div>

            {/* 내용 */}
            <div className="col-span-3">
              <a
                href="#"
                className="flex items-center text-lg font-semibold text-gray-800 transition duration-300 group-hover:text-gray-900"
              >
                Senior Frontend Engineer, Accessibility · Klaviyo
                <span className="inline-block ml-2 transition duration-300 transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <p className="mt-4 text-gray-600">
                Build and maintain critical components used to construct
                Klaviyo’s frontend. Work closely with cross-functional teams to
                advocate for best practices in web accessibility.
              </p>

              {/* 기술 스택 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  Storybook
                </span>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="grid grid-cols-4 gap-8 p-8 transition duration-300 bg-gray-100 group hover:bg-gray-200 rounded-xl">
            <div className="col-span-1 text-sm font-semibold text-gray-500">
              2018 — 2024
            </div>

            <div className="col-span-3">
              <a
                href="#"
                className="flex items-center text-lg font-semibold text-gray-800 transition duration-300 group-hover:text-gray-900"
              >
                Lead Engineer · Upstatement
                <span className="inline-block ml-2 transition duration-300 transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <p className="mt-4 text-gray-600">
                Build, style, and ship high-quality websites, design systems,
                and mobile apps. Led engineering department, promoted knowledge
                sharing, and spearheaded internal tools development.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  HTML & SCSS
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="min-h-screen p-8 bg-white">
        <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        <p>Here are some of the projects I have worked on.</p>
        {/* 나중에 ProjectCard 컴포넌트 여기에 들어감 */}
      </section>
    </div>
  );
}
