export default function Projects() {
  return (
    <section id="projects" className="w-full px-12 py-24">
      <div className="max-w-[1280px] mx-auto">
        {/* ===== Title ===== */}
        <h2 className="text-[64px] font-bold tracking-wide leading-none text-gray-200">
          PROJECTS
        </h2>
        <hr className="border-t border-[#3A3A3A] mt-4 mb-20" />

        {/* ===== PROJECT CARD 1 ===== */}
        <div className="grid grid-cols-12 gap-16 items-start mb-32">
          {/* LEFT — TEXT */}
          <div className="col-span-12 md:col-span-5 flex flex-col space-y-6">
            <h3 className="text-3xl font-semibold text-gray-100 leading-tight">
              Fragments API Server
            </h3>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Backend & Cloud Architecture
            </p>

            <p className="text-[14px] text-gray-500">2025</p>

            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                A production-grade REST API that enables users to create, read,
                update, delete, and convert data fragments across multiple
                formats. This project was built to explore scalable backend
                design and real-world cloud workflows.
              </p>

              <p>
                The system stores fragment data in Amazon S3 and metadata in
                Amazon DynamoDB, with full support for text, image, JSON,
                Markdown, HTML, and CSV conversions. The entire service is fully
                containerized and optimized for high reliability.
              </p>

              <p>
                The API is automatically built, tested, and deployed through a
                CI/CD pipeline using GitHub Actions, Docker, Amazon ECR, and ECS
                — with comprehensive unit and integration tests powered by Jest
                and Hurl.
              </p>
            </div>

            <a
              href="https://github.com/runner-jaimie/fragments"
              target="_blank"
              className="text-purple-400 underline underline-offset-4 text-[15px]"
            >
              github.com/runner-jaimie/fragments ↗
            </a>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="col-span-12 md:col-span-7 flex justify-end">
            <div className="bg-[#09090b] border border-[#1f1f23] rounded-xl p-14 w-full max-w-[720px]">
              {/* White inner canvas */}
              <div className="bg-white rounded-lg p-6 w-full h-full overflow-hidden">
                <img
                  src="/images/fragments-arch.png"
                  alt="Fragments API diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== PROJECT CARD 2 ===== */}
        {/* LEFT — IMAGE */}
        <div className="grid grid-cols-12 gap-16 items-start mb-32">
          <div className="col-span-12 md:col-span-7 flex justify-start">
            <div className="bg-[#09090b] border border-[#1f1f23] rounded-xl p-14 w-full max-w-[720px]">
              {/* White inner canvas */}
              <div className="bg-white rounded-lg p-6 w-full h-full overflow-hidden">
                <img
                  src="/images/bestseller-1.png"
                  alt="Google Best Sellers screenshot"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="col-span-12 md:col-span-5 flex flex-col space-y-6">
            <h3 className="text-3xl font-semibold text-gray-100 leading-tight">
              Google Best Sellers
            </h3>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Frontend · API Integration
            </p>

            <p className="text-[14px] text-gray-500">2024</p>

            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                Built a Google Books–based Best Seller website using Next.js,
                providing a simple and responsive interface for browsing popular
                and highly ranked titles. Designed clean list and detail pages
                to make book information easy to explore.
              </p>

              <p>
                Integrated the Google Books API to display real-time data,
                structured routing with the Next.js App Router, and organized
                project folders for better maintainability. Enhanced overall UX
                through improved spacing, layout consistency, and clear visual
                hierarchy.
              </p>
            </div>

            <a
              href="https://bestsellernextjs.vercel.app/"
              target="_blank"
              className="text-purple-400 underline underline-offset-4 text-[15px]"
            >
              bestsellernextjs.vercel.app ↗
            </a>
          </div>
        </div>
        {/* ===== PROJECT CARD 3 ===== */}
        <div className="grid grid-cols-12 gap-16 items-start mb-32">
          {/* LEFT — TEXT */}
          <div className="col-span-12 md:col-span-5 flex flex-col space-y-6">
            <h3 className="text-3xl font-semibold text-gray-100 leading-tight">
              React Movie Data App
            </h3>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Frontend UI & Animation
            </p>

            <p className="text-[14px] text-gray-500">2024</p>

            <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
              <p>
                A cinematic movie browsing application built with React and
                Framer Motion. The interface features three main categories —
                Popular, Now Playing, and Coming Soon — allowing users to
                explore curated movie selections with smooth, visually appealing
                transitions.
              </p>

              <p>
                The hero banner showcases a featured movie, while animated
                thumbnails and section transitions create an immersive and fluid
                browsing experience. Framer Motion is used extensively to
                enhance interactivity and motion throughout the UI.
              </p>

              <p>
                The app is optimized for responsiveness and deployed through
                Vercel for fast global performance. This project focuses on
                clean UI structure, component reusability, and animation-driven
                storytelling.
              </p>
            </div>

            <a
              href="https://reactjsmoviedata.vercel.app/"
              target="_blank"
              className="text-purple-400 underline underline-offset-4 text-[15px]"
            >
              reactjsmoviedata.vercel.app ↗
            </a>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="col-span-12 md:col-span-7 flex justify-end">
            <div className="bg-[#09090b] border border-[#1f1f23] rounded-xl p-14 w-full max-w-[720px]">
              {/* White inner canvas */}
              <div className="bg-white rounded-lg p-6 w-full h-full overflow-hidden">
                <img
                  src="/images/movie.jpg"
                  alt="React Movie Data App screenshot"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
